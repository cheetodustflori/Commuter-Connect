import React, {useState, useEffect} from 'react';
import './Styles/Profile.css'
import ReactDOM from 'react-dom/client';
import LeftProfileBar from '../Components/Profile/LeftProfileBar.jsx'
import ProfileUserInfo from '../Components/Profile/ProfileUserInfo';
import ProfileEdit from '../Components/Profile/ProfileEdit';
import NavBar from '../components/NavBar/Nav';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

  let navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  //This is where we parse the data depending on the status
  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

const handleSignOut = () => {
  let path = `/`;
  navigate(path);
};
const [profileChange, setProfileData] = useState({});

const handleDataChange = (data) => {
  setProfileData(data);
};

const saveProfileChanges = async () =>{
  let userID = await getUserID()
  sendDataChanges(userID);
  setEditMode(!editMode);
  window.location.reload();
};

async function sendDataChanges(currUser){
  //console.log(JSON.stringify(profileChange));
  console.log(profileChange);
  let response = await fetch(`http://127.0.0.1:5000/SaveUserChanges?userID=${currUser}`,
                {
                  method:'POST',
                  mode:'cors',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(profileChange)
                });
}

async function getUserID(){
    let response = await fetch(`http://127.0.0.1:5000/getUsername`, {
      method: "GET",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
    let data = await response.json();
    console.log(data);
    return data['user'];
  }




  // //end
  // setEditMode(!editMode);
//};


{/*  WORK UNDER HERE  */}
  return (
    <>
    <NavBar/>
    <div className="profilePage">
      <h1>My Profile</h1>
      <div className="leftProfileBar">
        <LeftProfileBar/>

        {!editMode && (
          <>
            <ProfileUserInfo/>
          </>
        )}

        {editMode && (
          <>
            <ProfileEdit onDataChange={handleDataChange}/>
          </>
        )}
        
        <div className='buttons'>
          {!editMode && (
            <>
              <button id='editProfile' onClick={handleEditProfile}>Edit Profile</button>
              <button id='signOutProfile' onClick={handleSignOut}>Sign Out</button>
            </>
          )}

          {editMode && (
            <>
              <button id='saveChanges' onClick={saveProfileChanges}>Save Changes</button>
              <button id='editProfile' onClick={handleEditProfile}>Cancel</button>
            </>
          )}
          
        </div>
      </div>
      
      
    </div>
    </>
  )
}