import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/Nav";
import './Styles/Nearby.css'
import Event from "../Components/Nearby/Event";

export default function Nearby() {
  const [user, setUser] = useState("");
  const [events, setEvents] = useState([]);
  const [createEvent, setCreateEvent] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");
  const [AMPM, setAMPM] = useState("");

  const [createEventChange, setCreateEventChange] = useState({
    Name: '',
    Date: '',
    Time: '',
    Location: '',
    Description: '',
    Email: '',
    Color: '',
    Type: ''
  });

  // Update Time whenever time or AMPM changes
  useEffect(() => {
    if (time && AMPM) {
      setCreateEventChange(prev => ({
        ...prev,
        Time: `${time} ${AMPM}`
      }));
    }
  }, [time, AMPM]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    const newData = {...createEventChange, [name]: value};
    setCreateEventChange(newData);
  };

  const handleAddTime = (e) => {
    const {value} = e.target;
    setTime(value);
  };

  const handleColorChange = (selectedColor) => {
    setCreateEventChange(prev => ({
      ...prev,
      Color: selectedColor
    }));
  };

  const handleTypeChange = (type) => {
    setCreateEventChange(prev => ({
      ...prev,
      Type: type
    }));
  };

  useEffect(() => {
    const fetchUser = async () => {
      const userId = await getUserID();
      setUser(userId); // Update the state with the user ID
      console.log(userId);
    };

    fetchUser();
  }, []);

  async function getUserID() {
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
    if (user) {
      loadCommunityEvents(); // Load events after user is set
    }
  }, [user]); // Only run this effect when user changes

  async function loadCommunityEvents() {
    let response = await fetch(`http://127.0.0.1:5000/getCommunityEvents`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    let data = await response.json();
    setEvents(data);
    console.log(data);
  };

  const handleCreateEvent = () => {
    setCount(count + 1);
    setCreateEvent(!createEvent);
  };

  // Properly defined handler functions for AM/PM buttons
  const handleAM = () => {
    setAMPM("AM");
  };

  const handlePM = () => {
    setAMPM("PM");
  };
  
  const handleAddEvent = async (e) => {
    console.log("Add Event Button Clicked");
    e.preventDefault();
  
    // Generate a random ID for the event document
    const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
    const sendEventReq = {
      random_id: randomId,
      event: createEventChange
    };
  
    console.log("Sending data:", JSON.stringify(sendEventReq));
  
    try {
      const response = await fetch('http://127.0.0.1:5000/setCommunityEvents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendEventReq),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        console.error('Error response:', result.message);
      } else {
        console.log('Event created successfully:', result);

        // Reset form and update UI
        setCreateEventChange({
          Name: '',
          Date: '',
          Time: '',
          Location: '',
          Description: '',
          Email: '',
          Color: '',
          Type: ''
        });
        
        // Reset other state values
        setTime("");
        setAMPM("");
        
        // Update events list and reset UI
        setCount(count + 1);
        setCreateEvent(false);
        loadCommunityEvents(); // Refresh the events list
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  // Added cancel handler
  const handleCancel = () => {
    setCreateEventChange({
      Name: '',
      Date: '',
      Time: '',
      Location: '',
      Description: '',
      Email: '',
      Color: '',
      Type: ''
    });
    setTime("");
    setAMPM("");
    setCreateEvent(false);
  };

  return (
    <>
    <NavBar/>
    <div className="Events">
      <div className="eventsTitle">
        <h1>Community Events</h1>

        {user === "UIC_Admin" && !createEvent && (
          <button 
            id="editScheduleId" 
            style={{ cursor: 'pointer', textDecoration: "underline" }} 
            onClick={handleCreateEvent}
          >
            <h2 id="createEvent">Create Event</h2>
          </button>
        )}
        
      </div>

      {!createEvent && (
        <div className="listOfEvents">
          {events && events.length > 0 ? (
            events.map((event, index) => (
              <div className="event-card" key={event.id || index}>
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
                {/* <p>{event.id}</p> */}
              </div>
            ))
          ) : (
            <div className="no-events-message">
              <p>No events found. Create an event to get started!</p>
            </div>
          )}
        </div>
      )}

      {createEvent && (
        <div className="bigComponentForCreateEvent">
          <div className="allEvents">

            <div className="eventsBoxOne">

              <div className="textinputs">
                <h2 style={{ fontWeight: 'normal' }}>Title</h2>
                <h2 style={{ fontWeight: 'normal' }}>Date</h2>
                <h2 style={{ fontWeight: 'normal' }}>Time</h2>
                <h2 style={{ fontWeight: 'normal' }}>Location</h2>
                <div id="descriptionText">
                  <h2 style={{ fontWeight: 'normal' }}>Description</h2>
                  <h4 style={{fontWeight: 'normal'}}>Max: 50 words</h4>
                </div>
              </div>

              <div className="textInputsBoxes">
                <input
                  id="eventName"
                  name="Name"
                  value={createEventChange.Name}
                  onChange={handleChange}
                  placeholder="Event Name"
                />

                <input
                  id="eventName"
                  name="Date"
                  value={createEventChange.Date}
                  onChange={handleChange}
                  placeholder="DD Month"
                />

                <div id="TimeDiv">
                  <input
                    id="eventTime"
                    value={time}
                    onChange={handleAddTime}
                    placeholder="Time"
                  />
                  {/* Fixed button event handlers */}
                  <button onClick={handleAM} id="TOD">AM</button>
                  <button onClick={handlePM} id="TOD">PM</button>
                </div>

                <input
                  id="eventName"
                  name="Location"
                  value={createEventChange.Location}
                  onChange={handleChange}
                  placeholder="Location"
                />

                <textarea
                  id="eventDescription"
                  name="Description"
                  value={createEventChange.Description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows={4}
                  maxLength={500}
                /> 
              </div>
            </div>

            <div className="eventsBoxOne">
              <div className="textinputs">
                <h2 style={{ fontWeight: 'normal' }}>Email</h2>
                <h2 style={{ fontWeight: 'normal' }}>Color</h2>
                <h2 style={{ fontWeight: 'normal' }}>Type</h2>
              </div>

              <div className="textInputsBoxes">
                <input
                  id="eventName"
                  name="Email"
                  value={createEventChange.Email}
                  onChange={handleChange}
                  placeholder="Email"
                />

                <div id="colors">
                  <button 
                    id="button" 
                    style={{backgroundColor:'#5D576A', borderColor: '#5D576A'}} 
                    onClick={() => handleColorChange('#5D576A')}
                  ></button>
                  <button 
                    id="button" 
                    style={{backgroundColor:'#7D91B8', borderColor: '#7D91B8'}} 
                    onClick={() => handleColorChange('#7D91B8')}
                  ></button>
                  <button 
                    id="button" 
                    style={{backgroundColor:'#C5D4EA', borderColor: '#C5D4EA'}} 
                    onClick={() => handleColorChange('#C5D4EA')}
                  ></button>
                  <button 
                    id="button" 
                    style={{backgroundColor:'#E3C698', borderColor: '#E3C698'}} 
                    onClick={() => handleColorChange('#E3C698')}
                  ></button>
                </div>

                <div id="TimeDiv">
                  <button id="TOD" onClick={() => handleTypeChange('UIC')}>UIC</button>
                  <button id="TOD" onClick={() => handleTypeChange('CC')}>Commuter Center</button>
                </div>
              </div>
            </div>
          </div>
          
          <div id="buttonHandleCreateEvent">
            <button id="createEventButton" onClick={handleAddEvent}>Create Event</button>
            <button id="cancelEventButton" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}