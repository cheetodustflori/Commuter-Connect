import React, {useState, useEffect} from 'react'
import './Styles/ProfileUserInfo.css'

const ProfileUserInfo = () => {
    
    const [loading, setLoading] = useState(true);
      const [firstName, setFirstName] = useState(null);
      const [lastName, setLastName] = useState(null);
      const [email, setEmail] = useState(null);
      const [username, setUserName] = useState(null);
    
    
    useEffect(() => {
        async function fetchProfileDetails(){
          try{
            const data = await getFirstName();
            setFirstName(data['name']);
            const name = await getLastName();
            setLastName(name['name']);
            const username = await getUser();
            setUserName(username['user']);
            const userEmail = await getEmail();
            setEmail(userEmail['email']);

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
      console.log(data);
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
      console.log(data);
      return data;
    }
    
    async function getEmail(){
      let response = await fetch(`http://127.0.0.1:5000/getEmail`, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      console.log(data);
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
        console.log(data);
        return data;
      }





  return (
    <div className='profileUserInfo'>
        <div id='profileInformation'>
            <h3>Username</h3>
            <p>{username}</p>
        </div>

        <div className='firstAndLastName'>
            <div id='profileInformation'>
                <h3>First Name</h3>
                <p>{firstName}</p>
            </div>
            <div id='profileInformationLastName'>
                <h3>Last Name</h3>
                <p>{lastName}</p>
            </div>
        </div>

        <div id='profileInformation'>
            <h3>Email</h3>
            <p>{email}</p>
        </div>
        
    </div>
  )
}

export default ProfileUserInfo