import React, {useState, useEffect} from 'react'
import './Styles/LeftProfileBar.css'
import profilePicture from '../../assets/profilePicture.png'

const LeftProfileBar = () => {

    const [loading, setLoading] = useState(true);
      const [firstName, setFirstName] = useState(null);
      const [lastName, setLastName] = useState(null);
      const [totFriends, setTotalFriends] = useState(null);
      const [userName, setUserName] = useState(null);
    
    
    useEffect(() => {
        async function fetchProfileDetails(){
          try{
          const data = await getFirstName();
          setFirstName(data['name']);
          const name = await getLastName();
          setLastName(name['name']);
          const username = await getUser();
          setUserName(username['user']);
          const friendsArray = await getFriendNum();
          setTotalFriends(friendsArray.length);
          }catch(error){
            console.error("Error loading profile:", error);
          }finally{
            setLoading(false);
          }
        }
        fetchProfileDetails();
    }, []);
    
    async function getFirstName(){
      let response = await fetch(`http://127.0.0.1:5000/getFirstName`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      return data;
    }
    
    async function getLastName(){
      let response = await fetch(`http://127.0.0.1:5000/getLastName`, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      return data;
    }
    
    async function getFriendNum(){
      let response = await fetch(`http://127.0.0.1:5000/getFriends`, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      return data;
    }

    async function getUser(){
        let response = await fetch(`http://127.0.0.1:5000/getUsername`, {
          method: "GET",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        
        let data = await response.json();
        return data;
      }


  return (
    <div className='profileLeft'>
        
        
        <div className='person'>
            <div id='imageEdits'>
                <img id="profileLogo" src={profilePicture}/>
            </div>
            
            <div className='name'>
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
            </div>
            
            <p>@{userName}</p>
        </div>
        

        <div className='main'>
            <div id='metadata'>
                <h3>Friends</h3>
                <p>{totFriends}</p>
            </div>
            <div id='metadata'>
                <h3>User Since</h3>
                <p>03/04/2005</p>

            </div>
        </div>

    </div>
  )
}

export default LeftProfileBar