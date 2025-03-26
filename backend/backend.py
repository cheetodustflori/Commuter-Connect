#This file will serve as our main backend file
#Boeing, G. (2024). Modeling and Analyzing Urban Networks and Amenities with OSMnx. Working paper. https://geoffboeing.com/publications/osmnx-paper/


from flask import Flask
from flask_cors import CORS
from flask import request
import os
from dotenv import load_dotenv
import requests


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

'''
For open street map, i was able to find this github repo
https://github.com/gboeing/osmnx-examples/blob/main/notebooks/00-osmnx-features-demo.ipynb
It contains documentation and examples of using the OSMNX library
'''


