import React from 'react'
import './Styles/LeftProfileBar.css'
import editIcon from '../../assets/editIcon.png'

const LeftProfileBar = () => {
  return (
    <div className='profileLeft'>
        
        
        <div className='person'>
            <div id='imageEdits'>
                <img id="profileLogo"/>
                <img id="edit" src={editIcon}/>
            </div>
            
            <div className='name'>
                <h3>First Name</h3>
                <h3>Last Name</h3>
            </div>
            
            <p>@username</p>
        </div>
        

        <div className='main'>
            <div id='metadata'>
                <h3>Friends</h3>
                <p>23</p>
            </div>
            <div id='metadata'>
                <h3>User Since</h3>
                <p>03/04/2005</p>

            </div>
        </div>

    </div>
  )
}

export default LeftProfileBar