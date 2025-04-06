import React from 'react'
import './Styles/ProfileUserInfo.css'

const ProfileUserInfo = () => {
    

  return (
    <div className='profileUserInfo'>
        <div id='profileInformation'>
            <h3>Username</h3>
            <p>someUsername</p>
        </div>

        <div className='firstAndLastName'>
            <div id='profileInformation'>
                <h3>First Name</h3>
                <p>First Name</p>
            </div>
            <div id='profileInformationLastName'>
                <h3>Last Name</h3>
                <p>Last Name</p>
            </div>
        </div>

        <div id='profileInformation'>
            <h3>Email</h3>
            <p>Useremail@gmail.com</p>
        </div>
        
    </div>
  )
}

export default ProfileUserInfo