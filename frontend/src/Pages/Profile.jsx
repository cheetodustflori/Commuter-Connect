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

const saveProfileChanges = () =>{

};


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
            <ProfileEdit/>
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