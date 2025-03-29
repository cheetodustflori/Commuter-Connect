import React, { useState }  from 'react'
import './Styles/TodaysCommuteSchedule.css'
import CommuteScheduleRoute from '../../../Components/Schedule/CommuteScheduleRoute'
import CommuteRoutes from './CommuteRoutes'

const Schedule = () => {
    const usersArray = [
        { id: 1, name: "Ted", color: "#769EB8" },
        { id: 2, name: "Robin", color: "#EC7D0E" },
      ];

    const [editMode, setEditMode] = useState(false);

    const handleEditSchedule = () => {
        setEditMode(!editMode);
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
                                <p style={{ color: '#769EB8'}}>Schedule Edit Mode</p>
                                <button id="editScheduleId" style={{ color: '#769EB8', cursor: 'pointer', textDecoration: "underline" }} onClick={handleEditSchedule}>Exit</button>
                            </>
                    )}

                </div>
                <h2>Commute Buddies</h2>

            </div>

            <div>
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

        {editMode && (
            <>
                <button id='newRouteButton'>Add New Route</button>
            </>
        )}

        {!editMode && (
            <>
                <CommuteRoutes/>
            </>
        )}

        

    </div>
  )
}

export default Schedule