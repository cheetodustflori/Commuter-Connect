import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../components/NavBar/Nav';
import './Styles/Friends.css'

export default function Friends() {
    return(
        <div className='friends'>

            <div className='line'></div>

            <div className='listOfFriends'>
                <h2>Your Friends (3)</h2>

                <div>

                    {friends.map((friend, index) => (
                        <div key={index} className='user'>
                            <p>{friend.name}</p>
                        </div>
                        ))}
                </div>
                
            </div>

            <div className='addFriend'>
                <input name="Username" />
                <button id='addFriendButton'>Add Friend</button>
            </div>
        </div>
    )
}

async function loadUserFriends(){
    let response = await fetch(`http://127.0.0.1:5000/getFriends?`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    })

    let data = await response.json();

    console.log(data);
    return data;
};

// let friends_array = loadUserFriends();

