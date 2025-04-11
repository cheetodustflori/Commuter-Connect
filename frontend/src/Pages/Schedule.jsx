import React from 'react'
import './Styles/Schedule.css'
import TodaysCommuteSchedule from '../Components/Schedule/TodaysCommuteSchedule'
import NavBar from '../components/NavBar/Nav';

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