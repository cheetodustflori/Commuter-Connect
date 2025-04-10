import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../components/NavBar/Nav';
import './Styles/Friends.css'

export default function Friends() {
    return(
        <div className='friends'>

            <div className='line'></div>

            <div className='listOfFriends'>
                <h2>Your Friends (3)</h2>
                <div className='user'>
                    <p>Username1</p>
                </div>
                <div className='user'>
                    <p>Username1</p>
                </div>
                <div className='user'>
                    <p>Username1</p>
                </div>
            </div>

            <div className='addFriend'>
                <input name="Username" />
                <button id='addFriendButton'>Add Friend</button>
            </div>
        </div>
    )
}