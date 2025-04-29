import React from 'react'
import './Styles/Event.css'
import UICLogo from '../../assets/UICLogo.png'
import CC from '../../assets/CommuterCenter.png'

const Event = ({eventTitle, date, time, location, description, email, color, type}) => {
    document.documentElement.style.setProperty('--event-color', color);

  return (
    <div className='thisEvent'>
    
    <div id="eventHeader" style={{backgroundColor:`${color}`}}>
        
        {type==="UIC" && (
            <img src={UICLogo} alt="UIC Logo" />
        )}
        {type==="CC" && (
            <img  src={CC} alt="UIC Logo" />
        )}
        
    </div>

    <div className='eventDateTimeRoom'>
        <h2>{eventTitle}</h2>

        <div id='dateAndTime'>
            <h3>{date} |</h3>
            <h3>{time}</h3>
        </div>
        <h3>{location}</h3>
    </div>

    <h3 id='info'>{description}</h3>
    <h3 id='info'>{email}</h3>
</div>

  )
}

export default Event