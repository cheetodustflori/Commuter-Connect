import React from 'react'
import './Styles/CommuteScheduleRoute.css'
import trainLogo from '../../assets/trainLogo.png'
import editIcon from '../../assets/editIcon.png'
import trashIcon from '../../assets/trashIcon.png'

import { useState, useEffect } from "react";


const CommuteRoute = ({ isActive, totalTime, routeTitle, routeStatus, startLocation, endLocation, departTime, arrivalTime, buddies, editMode }) => {

    const [timeLeft, setTimeLeft] = useState(totalTime);
    const [deleteEvent, setDeleteEvent] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const percentagePassed = ((totalTime - timeLeft) / totalTime) * 100;

    const handleDelete = () => {
        setDeleteEvent(!deleteEvent);
    };

  return (
    <div className='mainCommuteComp'>

        <div className='commuteRouteComp'>

            <div className='comp'>

                <div className='routes'>

                <h3 style={{marginTop: !isActive ? '-30px' : '-80px',}} id='mainTime'>{departTime}</h3>

                <div style={{color: !isActive ? 'rgba(0, 0, 0, 0.302)' : 'black',}} className='route'>

                    <div className='nameAndStatus'>
                        <h2 style={{fontWeight: "normal"}}>{routeTitle}</h2>
                        <h2 style={{fontWeight: "normal", color:'lightgray'}}> | </h2>
                        <h2 style={{color: !isActive ? 'rgba(0, 0, 0, 0.302)' : '#48C738', fontWeight: "normal"}}>{routeStatus}</h2>
                        <img style={{opacity: !isActive ? '0.5' : '1', marginLeft: '10px'}}  id="trainImage" src={trainLogo}/>
                    </div>

                    <div className='toAndFromText'>
                        <h3 style={{fontWeight: "normal", textAlign: "left"}}>{startLocation}</h3>
                        <h3 style={{fontWeight: 'bold', textAlign: "right"}} >{endLocation}</h3>
                    </div>

                    <div className='progressBarAndInfo'>
                        <div className="progressBar">
                            {isActive && (
                                <>
                                    <div id="circle" style={{ left: `${percentagePassed}%` }}></div>
                                    <div id="progress" style={{ width: `${percentagePassed}%` }}></div>
                                </>
                            )}
                        </div>
                        
                        {isActive && (
                            <>
                            <div className='estDepartureAndArrival'>
                                <div id='infoText'>
                                    <p style={{fontWeight: 'bold'}}>Depart</p>
                                    <p>{departTime}</p>
                                </div>

                                <div id='infoText'>
                                    <p style={{fontWeight: 'bold'}}>Est. Arrival</p>
                                    <p>{arrivalTime}</p>
                                </div>
                            </div>
                            </>
                        )}
                    </div>
                </div>

                </div>

                <div id='deleteAndIcons'>
                    
                    <div className='deleteBox'>

                        {deleteEvent && (
                            <>
                                <div className='notification'>
                                    <p>Are you sure you want to remove this route from your schedule?</p>
                                    <div id='buttons'>
                                        <button id='but' style={{ cursor: 'pointer'}} onClick={handleDelete}>Delete</button>
                                        <button id='but' style={{ cursor: 'pointer'}} onClick={handleDelete}>Cancel</button>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                    

                    <div className='iconRow'>
                        {editMode && (
                            <>
                                <img id="Icons" src={editIcon}/>
                                <img id="Icons" src={trashIcon} onClick={handleDelete}/>
                            </>
                        )}
                    </div>

                </div>

            </div>



            <div className='commuteBuddies'>

                {buddies.map((person) => (
                    <div id='user' key={person.id}>
                    
                        <div style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: `${person.color}`,
                            borderRadius: "50%",
                            }}>
                        </div>
                        <h3 style={{fontWeight: 'bold'}}>{person.name}</h3>

                        <div className='iconTrash'>
                            {editMode && (
                                <>
                                    <img id="Icons" src={trashIcon} onClick={handleDelete}/>
                                </>
                            )}
                        </div>

                    </div>
                ))}

            </div>

        </div>

    </div>
    
  )
}

export default CommuteRoute