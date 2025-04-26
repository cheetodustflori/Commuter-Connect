# 1 Weekly Meeting Notes:
Please note that this is the required layout for the weekly notes.

## Overview:
**When**:  Saturday, March 1st @ 11:15 AM
**Duration**:  11:15 - 12 PM
**Where**:  Online

## Attendance
Flori
Eddie
Zeel
**Late**: N/A
**Missing**: N/A

## Recent Progress:
Discussed tech stack, project scope, finalized project idea

## Meeting Notes: 
 Weekly meetings:
Saturday @ 9 am (https://uic.zoom.us/j/87596861413?pwd=3ke9ALWAgELavXgQFZSk1wq5uGZmJw.1) 
Back up: Tuesday @ 2:30 - 3:30 (in person @ cs lounge) 

Project Planning (UIC Commuter Connect)
Brainstorming
tracks trains, buses, plan commute, connect to another commuters, share commute status with friends
when the user is currently on their calculated commute route, we have a tab where it asks if they’re hungry. and if they are, then we can pull up the food around them (like if they’re walking or in a station that has a restaurant and maybe they don’t know where it’s at) and it can recalculate their commute depending on if they stop to eat
feature where you can put in your class schedule and it’ll tell u the best time to leave etc
Social gatherings
UIC Commuter Clubs have “Premium Access” who can add social gatherings, events, post on “bulletin board” 
Shortest path around campus
Commute buddies:
Traveling with another person: try to keep both together for as long as possible for safety
Fundamental Features/Purpose
Mobile App (*check with Reckinger if we can use ReactNative)
CTA Tracker and GPS to provide suggested routes: 
CTA Developer Center - Open Chicago Transit Data - CTA
Geolocation API overview  |  Google for Developers
Routes: https://developers.google.com/maps/documentation/routes/overview
Online community
Profile
Share location/commute 
Could be used for social gathering 
* Messaging system
Store user information	
Schedule
Address / destination 
Nearest place of interest
Eat
Social gathering (ex: commuting meet-up) 

Technologies / Tools

FrontEnd: React
BackEnd: Flask
User accounts
User address/schedule
Database: SQL
Two advanced data structures (store data in memory for the backend): 
String Look-Up (Longest common substring or exact string matching): Tries
Shortest walking route around campus: Dijkstra 
Nearest place of interest: B-Tree

Project Breakdown (Pages)
Bottom tab bar:
Home
Map
Community board
Profile
Login (2 accounts: user, vs UIC club)  / Create Account 
Home Page (User)
Nearest incoming buses / trains 
Your saved buses / trains 
Today’s commute schedule
Recommended vs own 
Also show today’s commute buddy
Find My Shortest Route / Add Destination …  
Home Page (UIC Club)
Your posted social events
Post a new social event
Map
View bus stops, train stations  
Community board
Social gatherings (posted by UIC club) 
Nearest places of interest (food, rest, study) 
Friends
See friends’ location
Add/request friends
Send a location/route/commute schedule to your friend
Compare schedules and make friend a “commute buddy” if similar enough
Profile
Upload schedule
Settings
Log out



## Action Items (Work In Progress):
Tasks:
Zeel: Check with Ethan on data for Dijkstra
Eddie: Research on Flask/SQL database with user profiles, routes
Flori: Upload meeting minutes, check with Reckinger