import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../components/NavBar/Nav';
import './Styles/Friends.css'

export default function Friends() {
<<<<<<< HEAD
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

=======
    return <>
    <h1 className="page-title">Friends</h1>
    </>
}
>>>>>>> origin/flori
