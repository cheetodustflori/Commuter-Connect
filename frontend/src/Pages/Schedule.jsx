import React from 'react'
import './Styles/Schedule.css'
import TodaysCommuteSchedule from '../Components/Schedule/TodaysCommuteSchedule'
const Schedule = () => {
  return (
    <div className='schedule'>
        <TodaysCommuteSchedule/>
    </div>
  )
}

export default Schedule