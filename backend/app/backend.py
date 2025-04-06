#This file will serve as our main backend file
#Boeing, G. (2024). Modeling and Analyzing Urban Networks and Amenities with OSMnx. Working paper. https://geoffboeing.com/publications/osmnx-paper/


from flask import Flask
from flask_cors import CORS
from flask import request
import os
from dotenv import load_dotenv
import requests
import osmnx

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


@app.route('/')
def root():
    return ''




