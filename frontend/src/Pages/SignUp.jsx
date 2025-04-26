import React, { useState } from 'react';
import './Styles/Login.css'
import train from '../assets/train.svg'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [fail, setFail] = useState(false);

    let navigate = useNavigate();

    const handleCreateAccount = async (e) => {
        console.log("Create Account Button Clicked");
        e.preventDefault();
    
        const userData = {
            username:username,
          email:email,
          password:password // Add any additional fields here
        };
    
        try {
          const response = await fetch('http://127.0.0.1:5000/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          const result = await response.json();

            if (response.status === 409) {
                setFail(true);
                console.log(result.Message); // "Username already exists!"
            } else if (response.ok) {
                console.log(result.Message); // "Profile successfully sent!"
                let path = `/`;
                navigate(path);
            }

        } catch (error) {
          console.error('Error creating user:', error);
          setResponseMessage('Something went wrong!');
        }
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
                    {fail && (
                        <>
                            <p style={{color:'red'}}>Username already exists</p>
                        </>
                    )}

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