import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Login.css'
import train from '../assets/train.svg'

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
    <div className='login'>
        <div className='leftContainer'>

            <img className="train" src={train}/>
            <div id="welcomeText">
                <h3>Welcome to</h3>
                <h1>Commuter Connect</h1>
            </div>

        </div>

        <div className='log-in-container'>
            
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
            
            <button className="log-in-button" onClick={handleSignIn}>Log In</button>

            <div id="sign-up-link">
                <p>New to Commuter Connect?</p>
                <p onClick={handleSignUp} style={{ cursor: 'pointer', textDecoration: "underline" }}>Create an account.</p>
            </div>
            


        </div>

    </div>
  )
}

export default Login