# Commuter Connect: Where Every Journey Meets Community.

## About<!-- Required -->

Commuter Connect is a web application built with React, Flask, Firebase, using data from Google Routes + Places API, designed to assist and connect commuter students at UIC (University of Illinois Chicago).

At UIC, a large percentage of students are commuters who face long, sometimes lonely journeys to and from campus.
Many lack a reliable network to coordinate rides, share routes, or connect with other commuters. Commuter Connect solves this problem by offering a platform that helps commuters organize and optimize their daily routes, connects students with "commute buddies" for a more convenient and social travel experience, and builds community among students who might otherwise feel isolated due to commuting.

Our mission is to turn commuting into an opportunity for connection, convenience, and community.

### Key Features

*Create Route System:*
Students can create and save their fastest commute routes using Google Maps' Routes and Places API, optimized with a priority queue for fastest paths.

*Commute Buddy System:*
Add friends to your commute routes to make traveling easier and more enjoyable.

*Friend Lookup:*
Easily find and add friends using a Trie-based friend search system for fast and efficient lookups.

*Daily Commute Management:*
View, edit, and manage your saved commute routes anytime.

*User Authentication:*
Secure login and registration system powered by Firebase Authentication to keep user data safe.


### Tools
React, Flask, Firebase, Google Routes + Places APIs

We used React Router for navigation between pages. 

We chose Flask over Django because Flask is lightweight and flexible, making it perfect for our project where we needed a simple REST API backend. Flask allowed us to easily connect with Firebase services and handle API requests without the additional complexity of Django’s full-stack structure. Since our app focuses more on frontend-user interactions  and lightweight data transactions (routes, friends, authentication), Flask provided exactly the right balance of simplicity and power for our project scope. Finally, Flask provided a faster setup time and easier team collaboration for a mid-sized project.


## How to use this project<!-- Required -->
<!-- 
* Here you may add information about how 
* 
* and why to use this project.
-->
### 1. Creating your own Project Repository
- Click on **Fork** to create your own repo and then click **Create Fork**.

### 2. Backend Installation : Python3, pip
- For Windows Users, Download Python from the [official website](https://www.python.org/downloads/). Ensure to select "Add Python to PATH" during installation.
- For Mac Users, install using Homebrew : `brew install python`
- Confirm installation by typing `python --version` and `pip --version` on Command Prompt

### 3. Frontend Installation : Nodejs and npm
- For Windows users, install [Node.js and npm LTS version](https://nodejs.org/en/download)
- For Mac users, using Homebrew `brew install node`
- Confirm installation by running `node -v` and `npm -v`

### 4. Set up Flask+React Demo locally
- Go to your Forked Repository on Github, Click on green **Code** button and copy the URL (using HTTPS or SSH)
- Open up VS Code and in the home page or under Source Control, click on **Clone a Repository**. Choose a directory to store your project on your local computer. You can also do the same from the *command line* using `git clone REPO_URL`
- You will now see a local version of all the files/source code from GitHub. 
### a. Set up Backend
- Move into the backend directory - `cd backend` 
- Create a new virtual environment - `python -m venv env`
- Activate the virtual environment
    - For Windows : `.\env\Scripts\activate`
    - For Mac : `source env/bin/activate`
- You will now see a (venv) infront of your command line
- To install all dependencies and packages, run `pip install -r requirements.txt`
- **Note:** To deactivate, run `env\Scripts\deactivate.bat` or `deactivate`
- Run `cd app` 
- Run `set FLASK_APP=server.py` to set the flask app
- Run the flask backend in debug mode for automatic reloading : `flask --app server.py --debug run`

### b. Set up Frontend
- Open up a new terminal + button on top right of the terminal and run `cd frontend`
- Install all packages by running `npm install`
- To run the react frontend, `npm run dev`


## Demo<!-- Required -->
<!-- 
* You can add a demo here GH supports images/ GIFs/videos 
* 
* It's recommended to use GIFs as they are more dynamic
-->


<!-- ## Table of Contents -->
<!-- Optional -->
<!-- 
* This section is optional, yet having a contents table 
* helps keeping your README readable and more professional.
* 
* If you are not familiar with HTML, no worries we all been there :D 
* Review learning resources to create anchor links. 
-->


<dev align="center">
    <table align="center">
        <tr>
            <td><a href="#about">About</a></td>        
            <td><a href="#how-to-use-this-project">Getting started</td>
            <td><a href="#demo">Demo</a></td>
            <td><a href="#project-roadmap--">Project Roadmap</a></td>
            <td><a href="#documentation">Documentation</a></td>
        </tr>
        <tr>
            <td><a href="#contributors">Contributors</a></td>
            <td><a href="#acknowledgments">Acknowledgments</a></td>
            <td><a href="#feedback">Feedback</a></td>
            <td><a href="#contact">Contact</a></td>
            <td><a href="#license">License</a></td>
        </tr>
    </table>
</dev>


<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>


<!-- ## Project Roadmap Optional --> <!-- add learning_Rs-->
<!-- 
* Add this section in case the project has different phases
* 
* Under production or will be updated.
-->


<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>



<!-- ## Documentation Optional -->
<!-- 
* You may add any documentation or Wikis here
* 
* 
-->


## Contributors<!-- Required -->
<!-- 
* Without contribution we wouldn't have open source. 
* 
* Generate github contributors Image here https://contrib.rocks/preview?repo=angular%2Fangular-ja
-->
Eddie Murillo

Florianne Che

Zeel Patel

<!-- ## Acknowledgments Optional -->
<!-- 
* Credit where it's do 
* 
* Feel free to share your inspiration sources, Stackoverflow questions, github repos, tools etc.
-->


<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>


## Feedback<!-- Required -->
<!-- 
* You can add contacts information like your email and social media account 
* 
* Also it's common to add some PR guidance.
-->


## Contact<!-- Required -->
<!-- 
* add your email and contact info here
* 
* 
-->
Eddie Murillo: emuri@uic.edu
Florianne Che: fche2@uic.edu
Zeel Patel: zpate6@uic.edu

<!--  ## License Optional -->
<!-- 
* Here you can add project license for copyrights and distribution 
* 
* check this website for an easy reference https://choosealicense.com/)
-->


<!-- - Use this html element to create a back to top button. -->
<p align="right"><a href="#how-to-use-this-project">back to top ⬆️</a></p>
