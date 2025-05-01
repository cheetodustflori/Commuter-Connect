import React, {useState, useEffect} from 'react';
import './Styles/Profile.css'
import ReactDOM from 'react-dom/client';
import LeftProfileBar from '../Components/Profile/LeftProfileBar.jsx'
import ProfileUserInfo from '../Components/Profile/ProfileUserInfo';
import ProfileEdit from '../Components/Profile/ProfileEdit';
import NavBar from '../components/NavBar/Nav';
import { useNavigate } from 'react-router-dom';
import Event from '../Components/Nearby/Event';
import { motion, useInView } from 'framer-motion'

export default function Profile() {

  let navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState("");


  //This is where we parse the data depending on the status
  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

const handleSignOut = () => {
  let path = `/`;
  navigate(path);
};
const [profileChange, setProfileData] = useState({});

const handleDataChange = (data) => {
  setProfileData(data);
};

const saveProfileChanges = async () =>{
  let userID = await getUserID()
  sendDataChanges(userID);
  setEditMode(!editMode);
  window.location.reload();
};

async function sendDataChanges(currUser){
  //console.log(JSON.stringify(profileChange));
  console.log(profileChange);
  let response = await fetch(`http://127.0.0.1:5000/SaveUserChanges?userID=${currUser}`,
                {
                  method:'POST',
                  mode:'cors',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(profileChange)
                });
}

async function getUserID(){
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
    return data['user'];
  }

  useEffect(() => {
    // First, fetch the user ID
    const fetchUser = async () => {
      try {
        const userId = await getUserID();
        setCurrentUser(userId);
        
        // Now that we have the userId, fetch the events
        await loadCommunityEventsForUser(userId);
      } catch (error) {
        console.error("Error fetching user or events:", error);
      }
    };
  
    fetchUser();
    
    // Define the function to load events inside useEffect
    async function loadCommunityEventsForUser(userId) {
      if (!userId) return; // Guard clause if userId is not available
      
      try {
        let response = await fetch(`http://127.0.0.1:5000/getCommunityEventsForUser?id=${userId}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        let data = await response.json();
        setEvents(data);
        console.log("Fetched events:", data);
      } catch (error) {
        console.error("Error loading community events:", error);
      }
    }
  }, []); // Empty dependency array means this runs once on component mount

  const handleClickOnCommunityEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        // Add debug currentUser
        console.log(`Attempting to delete event with id: ${id} for user: ${currentUser}`);
        
        // Fixed URL with proper & between query parameters
        const url = `http://127.0.0.1:5000/deleteSpecificCommunityEventForUser?id=${id}&userId=${currentUser}`;
        console.log(`Making request to: ${url}`);
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        
        console.log(`Response status: ${response.status}`);
        const result = await response.json();
        console.log('Response data:', result);
        
        if (!response.ok) {
          console.error('Error response:', result.message);
          alert(`Failed to delete event: ${result.message}`);
        } else {
          // Reset form and update UI
          alert('Event successfully deleted');
        }
        
      } catch (err) {
        console.error('Exception occurred:', err);
        alert(`An error occurred: ${err.message}. Check console for details.`);
      }
    }
  }


  // //end
  // setEditMode(!editMode);
//};


{/*  WORK UNDER HERE  */}
  return (
    <>
    <NavBar/>
    <div className="profilePage">
      <h1>My Profile</h1>
      <div className="leftProfileBar">
        <LeftProfileBar/>

        {!editMode && (
          <>
            <ProfileUserInfo/>
          </>
        )}

        {editMode && (
          <>
            <ProfileEdit onDataChange={handleDataChange}/>
          </>
        )}
        
        <div className='buttons'>
          {!editMode && (
            <>
              <button id='editProfile' onClick={handleEditProfile}>Edit Profile</button>
              <button id='signOutProfile' onClick={handleSignOut}>Sign Out</button>
            </>
          )}

          {editMode && (
            <>
              <button id='saveChanges' onClick={saveProfileChanges}>Save Changes</button>
              <button id='editProfile' onClick={handleEditProfile}>Cancel</button>
            </>
          )}
          
        </div>
      </div>

      <h2>Saved Events</h2>

      <div className='selectedEvents'>
        {events.map((event, index) => (
              <motion.div className='indJobComp'
                whileInView={{ y: 0, // Start at the final position (0)
                opacity: 1,  transition: { duration: 0.5 }}} initial={{y: '6vw', opacity: 0}}
              >
              <div className="" key={event.id || index} onClick={() => handleClickOnCommunityEvent(event.id)}>
                <Event 
                  eventTitle={event.Name}
                  date={event.Date}
                  time={event.Time}
                  location={event.Location}
                  description={event.Description}
                  email={event.Email}
                  color={event.Color}
                  type={event.Type}
                />
              </div>
              </motion.div>
            ))}
      </div>

      
      
    </div>
    </>
  )
}