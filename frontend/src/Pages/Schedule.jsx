import React from 'react'
import './Styles/Schedule.css'
import TodaysCommuteSchedule from './Components/Schedule/TodaysCommuteSchedule'
import CommuteRoutes from './Components/Schedule/CommuteRoutes'

const Schedule = () => {
  return (
    <div className='schedule'>
        <TodaysCommuteSchedule/>
        <CommuteRoutes/>
    </div>
  )
}

export default Schedule