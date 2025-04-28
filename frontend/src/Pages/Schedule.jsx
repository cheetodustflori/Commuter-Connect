import React from 'react'
import './Styles/Schedule.css'
import TodaysCommuteSchedule from '../Components/Schedule/TodaysCommuteSchedule'
import NavBar from '../components/NavBar/Nav';
import { useSearchParams } from 'react-router-dom';

const Schedule = () => {
  const [searchParams] = useSearchParams();
  const user = searchParams.get('prop');

  return (
    <>
    <NavBar user = {user}/>
    <div className='schedule'>
        <TodaysCommuteSchedule
        user = {user}/>
    </div>
    </>
    
  )
}

export default Schedule