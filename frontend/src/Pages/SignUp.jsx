import React, { useState } from 'react';
import './Styles/Login.css'
import train from '../assets/train.svg'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const handleCreateAccount = () => {
        console.log("Create Account Button Clicked");
        let path = `/`;
        navigate(path);
    };


  return (
    <div className='signup'>
        <div className='leftContainer'>

            <img className="train" src={train}/>
            <div id="welcomeText">
                <h3>Welcome to</h3>
                <h1>Commuter Connect</h1>
            </div>

        </div>

        <div className='sign-up-container'>
            
            <div className="emailpassInput">
                <p>Username</p>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </div>
            
            <div className="emailpassInput">
                <p>Email</p>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="emailpassInput">
                <p>Password</p>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <button id="create-account" onClick={handleCreateAccount}>Create Account</button>

        </div>

    </div>
  )
}

export default SignUp