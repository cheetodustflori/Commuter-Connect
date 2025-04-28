#This file will serve as our main backend file
#Boeing, G. (2024). Modeling and Analyzing Urban Networks and Amenities with OSMnx. Working paper. https://geoffboeing.com/publications/osmnx-paper/


from flask import Flask,render_template
from flask_cors import CORS
from flask import request,jsonify
import os
import json
from dotenv import load_dotenv
import requests
from requests import get, post, put
import firebase_admin
from firebase_admin import credentials, firestore
import heapq

#set up the flask to recieve requests from front end
app = Flask(__name__)

#to allow CORS from front end

'''
taken from the flask demo from earlier milestone
we are incorporating an external api (Google maps) 
and will need these
'''

CORS(app)

load_dotenv()
CTA_Train_Key = os.getenv('CTA_TRAIN_API_KEY')
CTA_Bus_Key = os.getenv('CTA_BUS_API_KEY')
Firebase_Key = os.getenv('FIREBASE_API_KEY')
Google_Maps_Key = os.getenv('GOOGLE_MAPS_API_KEY')


cred = credentials.Certificate("../firebase.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

'''creating a User node that will be used when the username 
    has been read from the user

    Everything is set to be empty upon initialization this is for future
    implementation
'''
class User:
    def __init__(self)->None:
        self.userName = None
        self.friends = []
        self.email = None
        self.first_name = None
        self.last_name = None
        self.password = None
        self.routes = {}
        return  
    def assign_values(self,dictionary)->None:
        # print( "HELLO")
        self.userName = dictionary.get('username')
        self.friends = dictionary.get('friends')
        self.email = dictionary.get('email')
        self.first_name = dictionary.get('first_name')
        self.last_name = dictionary.get('last_name')
        self.password = dictionary.get('password')
        self.routes = dictionary.get('routes')
        return

class Route:
    def __init__(self,dict)->None:
        self.title = dict.get('Title')
        self.origin = dict['geoLocations']['origin']['address']
        self.dest = dict['geoLocations']['dest']['address']

        self.duration,self.distance = getRoute(dict['geoLocations']['origin']['lat'],
                                    dict['geoLocations']['origin']['lon'],
                                    dict['geoLocations']['dest']['lat'],
                                    dict['geoLocations']['dest']['lon'])
        
        self.departTime = dict['Depart']
        self.arrivalTime = calculateArrival(self.departTime, self.duration)
        self.commuteBuddies = dict['Commuter_Buddies']
        self.distance = convertToMiles(self.distance)
        return



UserStructure = User()
Routes = {}

@app.route('/')
def root():
    # place= "41.6288754,-87.6837692"
    # embed_url = f"https://www.google.com/maps/embed/v1/place?key={Google_Maps_Key}&q={place}"
    # return render_template(embed_url = embed_url)
    return ''

#get the user's information from log in
@app.route('/getUserInfo', methods = ['GET'])
def getUserInfo():
    #gets the userID from the request from front end
    userID = request.args.get('userID')
    password = request.args.get('password')

    #just incase the request somehow doesn't have the userID, this will 
    #return no user entered (or if the user pressed log in on an empty field)
    if not userID:
        return jsonify({'Response': 'User not entered'}),400
    if not password:
        return jsonify({'Response': 'Password not entered'}),400


    #accessing the databse for the user
    doc = db.collection('Users').document(userID).get()
    
    #possibly incorporate a try catch
    
    if doc.exists:
        doc_dict = doc.to_dict()
        userPassword = doc_dict.get('password',None)
    
        # return jsonify(doc.to_dict())
        if userPassword == password:
            constructDataStructure(doc_dict)
            populateRoutesMap()
            return jsonify({'Response': 'All good!'}),200
        else:
            return jsonify({'Response':'Wrong Password'}),400
    
    #this will return if the user attempted to log in with a username
    #that does not exist
    else:
        return jsonify({'Response':'User does not exist'}),400

def constructDataStructure(dictionary):
     global UserStructure
     UserStructure.assign_values(dictionary)
     return

def populateRoutesMap():
    global Routes

    for route_name, route_map in UserStructure.routes.items():

        duration,distance = getRoute(route_map['geoLocations']['origin']['lat'],
                                    route_map['geoLocations']['origin']['lon'],
                                    route_map['geoLocations']['dest']['lat'],
                                    route_map['geoLocations']['dest']['lon'])
        
        arrivalTime = calculateArrival(route_map['Depart'], duration)
        distance = convertToMiles(distance)

        route = {
            'Title': route_map['Title'],
            'Origin': route_map['geoLocations']['origin']['address'],
            'Dest': route_map['geoLocations']['dest']['address'],
            'Depart': route_map['Depart'],
            'Buddies': route_map['Commuter_Buddies'],
            'Arrive':arrivalTime,
            'Dist':distance,
            'Durr':duration
        }

        Routes[route_map['Title']] = route
    return
    
@app.route('/getFriends',methods=['GET'])
def getFriendsList():
    return UserStructure.friends

@app.route('/getSavedRoutes',methods=['GET'])
def getSavedRoutes():
    '''
    This returns a map of different routes
        'Commuter
    '''
    return Routes

@app.route('/getFirstName',methods=['GET'])
def getFirstName():
    return {"name":UserStructure.first_name}

@app.route('/getLastName',methods=['GET'])
def getLastName():
    return {"name":UserStructure.last_name}

@app.route('/getEmail',methods=['GET'])
def getEmail():
    return {"email":UserStructure.email}

@app.route('/getUsername',methods=['GET'])
def getUsername():
    return {"user":UserStructure.userName}

@app.route('/createUser',methods=['POST'])
def addUser():
    data = request.json
    #grabs the userID from the request to accuratly create the account
    userID = data.get('username')

    # Check if the user already exists
    user_ref = db.collection("Users").document(userID)
    if user_ref.get().exists:
        return jsonify({'Message': 'Username already exists!'}), 409  # 409 = Conflic

    #saving data in the Users collection
    db.collection("Users").document(userID).set(data)

    return jsonify({'Message':'Profile successfully sent!'})

@app.route('/addRoute', methods=['POST'])
def addRoute():
    userID = UserStructure.userName
    data = request.json
    print(data)
    lat_origin,lon_origin = getLocationCoordinates(data['departLocation'])
    lat_dest,lon_dest = getLocationCoordinates(data['arrivalLocation'])

    commuterBuddies = []
    for user in data['selectedOptions']:
        commuterBuddies.append(user[0])
    geoLocations = {
        'origin':{'address': data['departLocation'],'lat': str(lat_origin), 'lon':str(lon_origin)},
        'dest':{'address':data['arrivalLocation'],'lat':str(lat_dest), 'lon':str(lon_dest)}
    }

    # print(commuterBuddies)
    postString = {
        'Commuter_Buddies': commuterBuddies,
        'Method':'WALK',
        'geoLocations': geoLocations,
        'Title': data['commuteTitle'],
        'Depart':data['departTime']
    }
    routes = UserStructure.routes
    numOfEntries = len(routes)
    name = 'route'+str(numOfEntries)
    routes[name] = postString
    reference = db.collection('Users').document(userID)

    try:
        reference.update({'routes':routes})
        constructDataStructure(db.collection('Users').document(userID).get().to_dict())
        populateRoutesMap()
    except Exception as e:
        print(f"Error! : {e}")
    return jsonify({'Message':'Route successfully sent!'})

@app.route('/SaveUserChanges',methods=['POST'])
def saveUserChanges():
    data = request.json
    # print(data)
    OriginalUserID = request.args.get('userID')
    # print(OriginalUserID)

    tempRoutes = []
    tempRoutes = UserStructure.routes

    
    # if(data['username']!=OriginalUserID):
    #     newUser = data['username']
    # else:
    #     newUser = OriginalUserID

    # if(data['email'] != UserStructure.email):
    #     newEmail = data['email']
    # else:
    #     newEmail = UserStructure.email

    newUser = OriginalUserID
    newEmail = UserStructure.email
    newFirst = UserStructure.first_name
    newLast = UserStructure.last_name
    newPass = UserStructure.password

    if(data['username']!='') and (newUser!=data['username']):
        newUser = data['username']

    if(data['email']!='') and (newEmail != data['email']):
        newEmail = data['email']

    if(data['first_name']!='') and (newFirst != data['first_name']):
        newFirst = data['first_name']

    if(data['last_name']!='') and (newLast != data['last_name']):
        newLast = data['last_name']
    
    if(data['password']!='') and (newPass != data['password']):
        newPass = data['password']

    newData = {
        'username': newUser,
        'first_name':newFirst,
        'last_name':newLast,
        'email':newEmail,
        'password':newPass,
        'routes':tempRoutes,
        'friends':UserStructure.friends
    }

    db.collection('Users').document(OriginalUserID).delete()

    db.collection('Users').document(newUser).set(newData)
    constructDataStructure(newData)

    

    return jsonify({'Message':'Data Saved Sucessfully'})

'''
This one might not need a path and would be a helper function depending on 
the implementation (this is before conversing with the rest of the team)
'''
@app.route('/getLocationName', methods = ['GET'])
def getLocationName():

    #baseurl that we will use for the call
    baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?'

    #changes the request into json so that we can access the different components
    data = request.json
    latitude = data.get('LAT')
    longitude = data.get("LON")

    #this builds the second half of api call
    string = f'latlng={latitude},{longitude}&key={Google_Maps_Key}'

    #takes in the response from making the call
    response = requests.get(baseURL+string)

    #TODO --> IMPLEMENT EDGE CASES OF ERROR 404 (Invalid address or coordinates)

    #formats the response for accessing 
    json_results = json.loads(response.content)

    #this will return the first element of the results which will contain the 
    #full address that would be used for a map ie. 78 W Western Ave, Chicago, IL
    return json_results['results'][0]['formatted_address']

#@app.route('/getLocationCoordinates',methods = ['GET'])
def getLocationCoordinates(locationName):

    #baseURL take from the website that will allow us to build call
    baseURL = "https://maps.googleapis.com/maps/api/geocode/json?"

    data = request.json
    address = locationName

    #this will be the address with the special characters replaced with their counterparts for web encoding
    address_string = replaceSpecialCharacters(address)

    #building full call
    string = f'address={address_string}&key={Google_Maps_Key}'
    # print(baseURL+string)
    #get call and load it in with json
    response = get(baseURL+string)
    json_results = json.loads(response.content)
    #print(json_results)

    #TODO---> IMPLEMENT EMPTY RESPONSE CASE

    '''this parses the response fully so that we get the accurate latitude and longitude
     there are various possible coordinates that are usable so this was to be as specific as possible
     location_coords is a map with two elements now --> {latitude: x.x, longitude: x.x} '''
    location_coords = json_results['results'][0]['navigation_points'][0]['location']

    latitude = location_coords['latitude']
    longitude = location_coords['longitude']

    return (latitude,longitude)
    #print(f"{latitude}   {longitude}")

'''This is a helper function that is called from getLocationCoordinates()
    It is meant to replace any special characters explicitly stated by the Google API Documentation
    to prevent errors when calling the API

    Goes through the string character by character, building a new string. 
    Everytime it encounters a special character, it instead adds a specified code in its place
    returns the new string that will be used for the api call
'''
def replaceSpecialCharacters(string):
    newString=""
    for char in string:
        match char:
            case " ":
                newString += "%20"
            case "\"":
                newString += "%22"
            case "<":
                newString += "%3C"
            case ">":
                newString += "%3E"
            case "#":
                newString += "%23"
            case "%":
                newString += "%25"
            case "|":
                newString += "%7C"
            case _:
                newString+=char
    return newString

# @app.route('/getRoute',methods=['GET'])
def getRoute(lat_origin,lon_origin,lat_dest,lon_dest):
    baseURL = "https://routes.googleapis.com/directions/v2:computeRoutes"
    
    travelMode = "WALK"

    headers = {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": Google_Maps_Key,
        "X-Goog-FieldMask": 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline'
    }

    query_string = {
        "origin":{
            "location":{
                "latLng":{
                    "latitude": lat_origin,
                    "longitude": lon_origin
                }
            }
        },
        "destination":{
            "location":{
                "latLng":{
                    "latitude": lat_dest,
                    "longitude": lon_dest
                }
            }
        },
        "travelMode": travelMode,
        "routingPreference":None,
        "computeAlternativeRoutes": False,
        "routeModifiers": {
            "avoidTolls": False,
            "avoidHighways": False,
            "avoidFerries": False
        },
        "languageCode": "en-US",
        "units": "IMPERIAL"
    }

    response = post(baseURL,headers=headers,data=json.dumps(query_string))
    print(response.status_code)
    json_results = json.loads(response.content)

    duration = json_results['routes'][0]['duration']
    distance = json_results['routes'][0]['distanceMeters']
    return (duration,distance)

def calculateArrival(depart,duration):

    index = depart.find(':')

    hour = int(depart[:index])
    minutes = int(depart[index+1:])

    duration_seconds = int(duration.replace("s", ""))
    duration_minutes = duration_seconds // 60  # integer division

    minutes += duration_minutes

    hour += minutes // 60
    minutes = minutes % 60

    hour = hour % 24

    arrival_time = f"{hour:02}:{minutes:02}"

    return arrival_time

def convertToMiles(distance):
    miles = distance / 1609.344
    return miles

@app.route('/getPlaces',method=['GET'])
def getPlacesPQ():
    return
@app.route('/getMap', methods=['GET'])
def getMap():
    baseURL = "https://www.google.com/maps/embed/v1/directions?"

    data = request.json
    lat_origin = data['oLat']
    lon_origin = data['oLon']
    lat_dest = data['dLat']
    lon_dest = data['dLon']

    string = f'key={Google_Maps_Key}&origin={lat_origin},{lon_origin}&destination={lat_dest},{lon_dest}'
    response = request.get(baseURL+string)


    return ''