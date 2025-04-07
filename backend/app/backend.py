#This file will serve as our main backend file
#Boeing, G. (2024). Modeling and Analyzing Urban Networks and Amenities with OSMnx. Working paper. https://geoffboeing.com/publications/osmnx-paper/


from flask import Flask
from flask_cors import CORS
from flask import request,jsonify
import os
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



