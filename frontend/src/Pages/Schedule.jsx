import React from 'react'
import './Styles/Schedule.css'
import CommuteRoute from '../Components/Schedule/CommuteRoute'

const Schedule = () => {
    const usersArray = [
        { id: 1, name: "Ted", color: "#769EB8" },
        { id: 2, name: "Robin", color: "#EC7D0E" },
      ];

  return (
    <div className='scheduleAndBuddiesComponent'>

        <div className='todaysCommuteScedule'>

            <div className='fullTitle'>
                <div id='titleBar'>
                    <h2>Today’s Commute Schedule</h2>
                    <p id="editScheduleId" style={{ cursor: 'pointer', textDecoration: "underline" }} >Edit Schedule</p>
                </div>
                <h2>Commute Buddies</h2>
            </div>
                
            <div>
                {/* [Backend incorperation] Loop through the commute routes using a map here (look at CommuteRoute.jsx under the commuteBuddies div for an example).
                    And when you are adding the time make sure you change the totalTime value in the Commute Route */}

                <CommuteRoute 
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
                />
                <CommuteRoute 
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
                />
            </div>

        </div>

        <div id='line'/>

    </div>
  )
}

export default Schedule