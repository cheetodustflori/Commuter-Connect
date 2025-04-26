import React, { useState }  from 'react'
import './Styles/Schedule.css'
import CommuteScheduleRoute from './CommuteScheduleRoute'
import CommuteRoutes from './CommuteRoutes'
import ScrollableRoutes from './ScrollableRoutes'

const Schedule = () => {
    const usersArray = [
        { id: 1, name: "Ted", color: "#769EB8" },
        { id: 2, name: "Robin", color: "#EC7D0E" },
      ];

    const [editMode, setEditMode] = useState(false);
    const [addNewRoute, setAddNewRoute] = useState(false);

    const handleEditSchedule = () => {
        setEditMode(!editMode);
        setAddNewRoute(false);
    };

    const handleAddNewRoute = () => {
        setAddNewRoute(!addNewRoute);
    };

    const [isCheckedTrain, setIsCheckedTrain] = useState(false);
    const [isCheckedBus, setIsCheckedBus] = useState(false);
    const [isCheckedWalk, setIsCheckedWalk] = useState(false);

    const [selectedOption, setSelectedOption] = useState("");


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
    setSelectedOption(values);
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

                            <h3 style={{fontWeight: 'bold'}}>Depart Time: <input name="myInput" /> </h3>

                            <div>
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

                            </div>

                            <div id='addCommuteBuddies'>

                                <h3 style={{fontWeight: 'bold'}}>Add Commute Buddies: </h3>
                                <select id="dropdown" value={selectedOption} onChange={handleChange}>
                                    <option value="">None Selected</option>
                                    <option value="option1">Ted</option>
                                    <option value="option2">Robin</option>
                                    <option value="option3">Lily</option>
                                </select>

                            </div>

                            <div id='buttonOptions'>
                                <button id='button' onClick={handleAddNewRoute} style={{backgroundColor: "#EAEAEA", color: "black", borderColor:  "#EAEAEA"}}>Cancel</button>
                                <button id='button' style={{backgroundColor: "#769EB8"}}>Add Route</button>
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