import React, { useState }  from 'react'
import './Styles/Schedule.css'
import CommuteScheduleRoute from './CommuteScheduleRoute'
import CommuteRoutes from './CommuteRoutes'
import ScrollableRoutes from './ScrollableRoutes'

const Schedule = ({user}) => {
    const usersArray = [
        { id: 1, name: "Ted", color: "#769EB8" },
        { id: 2, name: "Robin", color: "#EC7D0E" },
      ];

    const [editMode, setEditMode] = useState(false);
    const [addNewRoute, setAddNewRoute] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');


    const handleEditSchedule = () => {
        setEditMode(!editMode);
        setAddNewRoute(false);
    };

    const handleAddNewRoute = () => {
        setAddNewRoute(!addNewRoute);
    };

    // const handleAddRouteToDB = () => {
    //     console.log(user);
    //     console.log(selectedOptions);
    //     console.log(departTime);
    //     console.log(arrivalTime);
    //     console.log(departLocation);
    //     console.log(arrivalLocation);
    //     console.log(commuteTitle);
    // };

    const handleAddRouteToDB = async (e) => {
        console.log("Add Route Button Clicked");
        e.preventDefault();
    
        const sendRouteReq = {
            username:user,
            route:{
                friends:selectedOptions,
                departTime:departTime,
                arrivalTime:arrivalTime, // Add any additional fields here
                departLocation:departLocation,
                arrivalLocation:arrivalLocation,
                commuteTitle:commuteTitle
            }
        };
    
        try {
          const response = await fetch('http://127.0.0.1:5000/createRoute', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendRouteReq),
          });

          const result = await response.json();

            if (response.status === 409) {
                // setFail(true);
                console.log(result.Message); // "Username already exists!"
            } else if (response.ok) {
                console.log(result.Message); // "Profile successfully sent!"
                console.log(user);
                console.log(selectedOptions);
                console.log(departTime);
                console.log(arrivalTime);
                console.log(departLocation);
                console.log(arrivalLocation);
                console.log(commuteTitle);
                
            }

        } catch (error) {
          console.error('Error creating user:', error);
        //   setResponseMessage('Something went wrong!');
        }
      };

    // const [isCheckedTrain, setIsCheckedTrain] = useState(false);
    // const [isCheckedBus, setIsCheckedBus] = useState(false);
    // const [isCheckedWalk, setIsCheckedWalk] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [departTime, setDepartTime] = useState("");
    const [arrivalTime, setArrivalTime] = useState("");

    const [departLocation, setDepartLocation] = useState("");
    const [arrivalLocation, setArrivalLocation] = useState("");

    const [commuteTitle, setCommuteTitle] = useState("");


  const handleChangeTrain = (event) => {
    setIsCheckedTrain(event.target.checked);
  };

  const handleChangeBus = (event) => {
    setIsCheckedBus(event.target.checked);
  };

  const handleChangeWalk = (event) => {
    setIsCheckedWalk(event.target.checked);
  };

  const handleChange = (event) => {
    const values = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(prevItems => [...prevItems, values]);
  };

  const handleExit = () => {
    setAddNewRoute(!addNewRoute);
    setSelectedOptions([]); // Empties the array
};

    
  return (
    <div className='scheduleAndBuddiesComponent'>

        <div className='todaysCommuteScedule'>

            <div className='fullTitle' style={{gap: editMode ? '140px' : '200px',}}>
                <div id='titleBar'>
                    <h2>Today’s Commute Schedule</h2>

                    {!editMode && (
                            <>
                                <button id="editScheduleId" style={{ cursor: 'pointer', textDecoration: "underline" }} onClick={handleEditSchedule}>Edit Schedule</button>
                            </>
                    )}
                    {editMode && (
                            <>
                                <h3 style={{ color: '#769EB8'}}>Schedule Edit Mode</h3>
                                <button id="editScheduleId" style={{ color: '#769EB8', cursor: 'pointer', textDecoration: "underline" }} onClick={handleEditSchedule}>Exit</button>
                            </>
                    )}

                </div>
                <h2 id="commute-buddies-title">Commute Buddies</h2>

            </div>

            <div >
                 {/* [Backend incorperation] Loop through the commute routes using a map here (look at CommuteRoute.jsx under the commuteBuddies div for an example).
                     And when you are adding the time make sure you change the totalTime value in the Commute Route */}

                <CommuteScheduleRoute 
                        isActive={true}
                        totalTime={100}
                        overallTime={"8 AM"}
                        routeTitle={"Home to School"}
                        routeStatus={"En Route"}
                        startLocation={"1200 W Harrison St, Chicago, IL 60607"}
                        endLocation={"600 E Grand Ave, Chicago, IL 60611"}
                        departTime={"8:00 AM"}
                        arrivalTime={"8:15 AM"}
                        buddies={usersArray}
                        editMode={editMode}
                />
                <CommuteScheduleRoute 
                        isActive={false}
                        totalTime={100} 
                        overallTime={"10 AM"}
                        routeTitle={"School to Home"}
                        routeStatus={"Upcoming"}
                        startLocation={"1200 W Harrison St, Chicago, IL 60607"}
                        endLocation={"600 E Grand Ave, Chicago, IL 60611"}
                        departTime={"8:00 AM"}
                        arrivalTime={"8:15 AM"}
                        buddies={[{ id: 1, name: "Lily", color: "#48C738" }]}
                        editMode={editMode}
                />
            </div>

        </div>

        <div className='addNewRouteButtonComp'>

            {editMode && (
                <>
                    <button className='newRouteButton' onClick={handleAddNewRoute}>Add New Route</button>
                </>
            )}
        </div>

        {!editMode && (
            <>
                <CommuteRoutes/>
            </>
        )}

        {addNewRoute && (
            <>
                <div className='AddNewRoute'>
                    <h2>Add New Route</h2>
                    <h3 style={{fontWeight: "normal"}}>Add pre-made routes. If you want to create a new route, exit edit mode and create a new route. </h3>

                    <div className='addNewRoute'>

                        <ScrollableRoutes/>

                        <div className='routeOptions'>

                            <div className='writtenInputs'>

                                <div className='commuteTimes'> 
                                    <h3 style={{fontWeight: 'bold'}}>Depart Time: <input name="myInput" onChange={(e) => setDepartTime(e.target.value)}/> </h3>
                                    <h3 style={{fontWeight: 'bold'}}>Arrival Time: <input name="myInput" onChange={(e) => setArrivalTime(e.target.value)}/> </h3>
                                </div>
                                <div className='commuteTimes'> 
                                    <h3 style={{fontWeight: 'bold'}}>Depart Location: <input name="myInput" onChange={(e) => setDepartLocation(e.target.value)}/> </h3>
                                    <h3 style={{fontWeight: 'bold'}}>Arrival Location: <input name="myInput" onChange={(e) => setArrivalLocation(e.target.value)}/> </h3>
                                </div>

                                <h3 style={{fontWeight: 'bold'}}>Commute Title: <input name="myInput" onChange={(e) => setCommuteTitle(e.target.value)}/> </h3>

                            </div>
                            

                            {/* <div>
                                <h3 id='text' style={{fontWeight: 'bold'}}>Transportation Modes:</h3>

                                <div id='options'>

                                    <div id='individualCheckBox'>
                                        <input type="checkbox" checked={isCheckedTrain} onChange={handleChangeTrain} />
                                        <h3>Train</h3>
                                    </div>

                                    <div id='individualCheckBox'>
                                        <input type="checkbox" checked={isCheckedBus} onChange={handleChangeBus} />
                                        <h3>Bus</h3>
                                    </div>

                                    <div id='individualCheckBox'>
                                        <input type="checkbox" checked={isCheckedWalk} onChange={handleChangeWalk} />
                                        <h3>Walk</h3>
                                    </div>

                                </div>

                            </div> */}

                            <div id='addCommuteBuddies'>

                                <h3 style={{fontWeight: 'bold'}}>Add Commute Buddies: </h3>
                                <select id="dropdown" value={selectedOptions} onChange={handleChange}>
                                        <option value="">None Selected</option>
                                        <option value="Ted">Ted</option>
                                        <option value="Robin">Robin</option>
                                        <option value="Lily">Lily</option>
                                    </select>
                                    <p>{selectedOptions.join(' , ')}</p>
                                

                            </div>

                            <div id='buttonOptions'>
                                <button id='button' onClick={handleExit} style={{backgroundColor: "#EAEAEA", color: "black", borderColor:  "#EAEAEA"}}>Cancel</button>
                                <button id='button' onClick={handleAddRouteToDB} style={{backgroundColor: "#769EB8"}}>Add Route</button>
                            </div>


                        </div>
                    </div>
                    
                </div>
            </>
        )}

    </div>
  )
}

export default Schedule