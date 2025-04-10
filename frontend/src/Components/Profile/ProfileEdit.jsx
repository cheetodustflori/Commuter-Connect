import React from 'react'
import './Styles/ProfileEdit.css'

const ProfileEdit = () => {
  return (
    <div className='profileUserInfo'>
        <div id='profileInformation'>
            <h3>Username</h3>
            <input name="Username" />
        </div>

        <div className='firstAndLastName'>
            <div id='profileInformation'>
                <h3>First Name</h3>
                <input name="First Name" />
            </div>
            <div id='profileInformationLastName'>
                <h3>Last Name</h3>
                <input name="Last Name" />
            </div>
        </div>

        <div className='firstAndLastName'>

            <div id='profileInformation'>
                <h3>Email</h3>
                <input name="Email" />
            </div>

            <div id='profileInformation'>
                <h3>Password</h3>
                <input name="Password" type='password'/>
            </div>
        </div>
        
    </div>
  )
}

export default ProfileEdit