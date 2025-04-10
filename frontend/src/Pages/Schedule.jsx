import React from 'react'
import './Styles/Schedule.css'
import TodaysCommuteSchedule from '../Components/Schedule/TodaysCommuteSchedule'
const Schedule = () => {
  return (
    <>
    <NavBar/>
    <div className='schedule'>
        <TodaysCommuteSchedule/>
    </div>
    </>
    
  )
}

export default Schedule