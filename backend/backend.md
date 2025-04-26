This directory is for all backend-related files. You can either replace it entirely with your own `backend` directory or populate it with files for your project.


cd flask-backend
python -m venv env

.\env\Scripts\activate
source env/bin/activate

----pip install -r requirements.txt 
        (probably the imports)

cd app 

set FLASK_APP=backend.py

flask --app backend.py --debug run

cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt 
cd app 
set FLASK_APP=backend.py
flask --app backend.py --debug run

