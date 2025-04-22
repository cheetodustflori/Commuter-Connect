This directory is for all backend-related files. You can either replace it entirely with your own `backend` directory or populate it with files for your project.


cd backend
python -m venv env

.\env\Scripts\activate
source env/bin/activate


cd app 

set FLASK_APP=backend.py

flask --app backend.py --debug run

