import React from 'react'
import './Styles/CommuteRoute.css'
import trainLogo from '../../Images/trainLogo.png'
import { useState, useEffect } from "react";


const CommuteRoute = ({ totalTime, isActive }) => {

    const [timeLeft, setTimeLeft] = useState(totalTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const percentagePassed = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div className='routes'>
        <h3 style={{marginTop: isActive ? '-30px' : '-80px',}} id='mainTime'>8 AM</h3>

        <div style={{color: isActive ? 'rgba(0, 0, 0, 0.302)' : 'black',}} className='route'>

            <div className='nameAndStatus'>
                <p>Home to School</p>
                <p> | </p>
                <p style={{color: isActive ? 'rgba(0, 0, 0, 0.302)' : '#48C738',}}>En Route</p>
                <img style={{opacity: isActive ? '0.5' : '1',}}  id="trainImage" src={trainLogo}/>
            </div>

            <div className='toAndFromText'>
                <p>1200 W Harrison St, Chicago, IL 60607</p>
                <p style={{fontWeight: 'bold'}} >600 E Grand Ave, Chicago, IL 60611</p>
            </div>

            <div className='progressBarAndInfo'>
                <div className="progressBar">
                    {!isActive && (
                        <>
                            <div id="circle" style={{ left: `${percentagePassed}%` }}></div>
                            <div id="progress" style={{ width: `${percentagePassed}%` }}></div>
                        </>
                    )}
                </div>
                
                {!isActive && (
                    <>
                    <div className='estDepartureAndArrival'>
                        <div id='infoText'>
                            <p style={{fontWeight: 'bold'}}>Depart</p>
                            <p>8:00 AM</p>
                        </div>

                        <div id='infoText'>
                            <p style={{fontWeight: 'bold'}}>Est. Arrival</p>
                            <p>8:15 AM</p>
                        </div>
                    </div>
                    </>
                )}
            </div>
            

        </div>

    </div>
  )
}

export default CommuteRoute