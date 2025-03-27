import React, { useState } from 'react';
import './Styles/Login.css'
import train from '../Images/Train.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log("Sign In Button Clicked")
    };

    const handleSignUp = () => {
        console.log("Sign Up Button Clicked")
    };

  return (
    <body>
        <div className='leftContainer'>

            <img id="trainImage" src={train}/>
            <div id="welcomeText">
                <h3>Welcome to</h3>
                <h1>Commuter Connect</h1>
            </div>

        </div>

        <div className='rightContainer'>
            
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
            
            <button id="button" onClick={handleSignIn}>Sign In</button>

            <div id="signupLink">
                <p>New to Commuter Connect?</p>
                <p onClick={handleSignUp} style={{ cursor: 'pointer', textDecoration: "underline" }}>Create an account.</p>
            </div>
            


        </div>

    </body>
  )
}

export default Login