#This file will serve as our main backend file
#Boeing, G. (2024). Modeling and Analyzing Urban Networks and Amenities with OSMnx. Working paper. https://geoffboeing.com/publications/osmnx-paper/


from flask import Flask
from flask_cors import CORS
from flask import request,jsonify
import os
import json
from dotenv import load_dotenv
import requests
import firebase_admin
from firebase_admin import credentials, firestore


#pip install osmnx

#set up the flask to recieve requests from front end
app = Flask(__name__)

#to allow CORS from front end

'''
taken from the flask demo from earlier milestone
we are incorporating an external api (Google maps) 
and will need these

load_dotenv()
APIkey=os.getend('GOOGLE_API_KEY')
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

@app.route('/')
def root():
    return ''

#get the user's information from log in
@app.route('/getUserInfo', methods = ['GET'])
def getUserInfo():
    #gets the userID from the request from front end
    userID = request.args.get('userID')

    #just incase the request somehow doesn't have the userID, this will 
    #return no user entered (or if the user pressed log in on an empty field)
    if not userID:
        return jsonify({'Error': 'User not entered'}),400

    #accessing the databse for the user
    doc = db.collection('Users').document(userID).get()

    #returns the user information as a JSON object
    if doc:
        return jsonify(doc.to_dict())
    
    #this will return if the user attempted to log in with a username
    #that does not exist
    else:
        return jsonify({'Error':'User does not exist'}),400

@app.route('/createUser',method=['POST'])
def addUser():
    data = request.json
    #grabs the userID from the request to accuratly create the account
    userID = data.get('userID')

    #saving data in the Users collection
    db.collection("Users").document(userID).set(data)

    return jsonify({'Message':'Profile successfully sent!'})

'''
This one might not need a path and would be a helper function depending on 
the implementation (this is before conversing with the rest of the team)
'''
@app.route('/getLocationName', method = ['GET'])
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

@app.route('/getLocationCoordinates',method = ['GET'])
def getLocationCoordinates():

    #baseURL take from the website that will allow us to build call
    baseURL = "https://maps.googleapis.com/maps/api/geocode/json?"

    data = request.json
    address = data['address']

    #this will be the address with the special characters replaced with their counterparts for web encoding
    address_string = replaceSpecialCharacters(address)

    #building full call
    string = f'address={address_string}&key={Google_Maps_Key}'
    
    #get call and load it in with json
    response = request.get(baseURL+string)
    json_results = json.loads(response.content)

    #TODO---> IMPLEMENT EMPTY RESPONSE CASE

    '''this parses the response fully so that we get the accurate latitude and longitude
     there are various possible coordinates that are usable so this was to be as specific as possible
     location_coords is a map with two elements now --> {latitude: x.x, longitude: x.x} '''
    location_coords = json_results['results'][0]['navigation_points'][0]['location']

    latitude = location_coords['latitude']
    longitude = location_coords['longitude']

    #Return?
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



