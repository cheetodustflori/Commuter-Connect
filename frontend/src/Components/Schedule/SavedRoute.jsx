import React from 'react'
import './Styles/SavedRoute.css'
import walking from '../../Images/walking.png'
import trainLogo from '../../Images/trainLogo.png'
import star from '../../Images/star.png'

const SavedRoute = ({isFavorite, isWalking, isBus}) => {
  return (
    <div>
        <div id='savedRoute'>
            {isFavorite && (
                <>
                    <img id="logo" src={star}/> 
                </>
            )}
            <p>School</p>
            <p>to</p>
            <p style={{fontWeight: 'bold'}}>Home</p>
        </div>

        <div id='savedRoute'>
            {isBus && (
                <>
                    <img id="logo" src={trainLogo}/> 
                </>
            )}
            {isWalking && (
                <>
                    <img id="logo" src={walking}/> 
                </>
            )}
            <p>1 Hour 23 Min</p>

        </div>
        

    </div>
  )
}

export default SavedRoute