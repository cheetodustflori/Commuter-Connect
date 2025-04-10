import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../components/NavBar/Nav';
import './Styles/Friends.css'

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        setFriends([
            { name: "Username1" },
            { name: "Username2" },
            { name: "Username3" },
            { name: "Username4" }
          ]);
      }, []); // Empty dependency array

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