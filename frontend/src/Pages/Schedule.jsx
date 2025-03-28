import React from 'react'
import './Styles/Schedule.css'
import CommuteRoute from '../Components/Schedule/CommuteRoute'

const Schedule = () => {
  return (
    <body className='scheduleMain'>
        <div className='scheduleAndBuddiesComponent'>
            <div className='todaysCommuteScedule'>
                <div id='titleBar'>
                    <h2>Today’s Commute Schedule</h2>
                    <p id="editScheduleId" style={{ cursor: 'pointer', textDecoration: "underline" }} >Edit Schedule</p>
                </div>
                <div>
                    <CommuteRoute totalTime={100}/>
                    <CommuteRoute totalTime={100} isActive={true}/>
                </div>

            </div>
        </div>
    </body>
  )
}

export default Schedule