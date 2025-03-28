import React, { useState } from 'react';
import './Styles/SignUp.css'
import train from '../Images/Train.png'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = () => {
        console.log("Create Account Button Clicked")
    };


  return (
    <div className='signup'>
        <div className='leftContainer'>

            <img id="trainImage" src={train}/>
            <div id="welcomeText">
                <h3>Welcome to</h3>
                <h1>Commuter Connect</h1>
            </div>

        </div>

        <div className='rightContainer'>
            
            <div id="emailpassInput">
                <p>Username</p>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div id="emailpassInput">
                <p>Email</p>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div id="emailpassInput">
                <p>Password</p>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <button id="button" onClick={handleCreateAccount}>Create Account</button>

        </div>

    </div>
  )
}

export default SignUp