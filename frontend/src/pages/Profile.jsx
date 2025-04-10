import React, {useState} from 'react';
import './Styles/Profile.css'
import ReactDOM from 'react-dom/client';
import LeftProfileBar from '../Components/Profile/LeftProfileBar.jsx'
import ProfileUserInfo from '../Components/Profile/ProfileUserInfo';
import ProfileEdit from '../Components/Profile/ProfileEdit';

export default function Profile() {
<<<<<<< HEAD

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(!editMode);
};

  return (
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
              <button id='signOutProfile'>Sign Out</button>
            </>
          )}

          {editMode && (
            <>
              <button id='saveChanges'>Save Changes</button>
              <button id='editProfile' onClick={handleEditProfile}>Cancel</button>
            </>
          )}
          
        </div>
      </div>
      
      
    </div>
  )
=======
  return <>
  <NavBar/>
  <h1 className="text-2xl font-bold">Profile</h1>;
  </>
>>>>>>> origin/flori
}