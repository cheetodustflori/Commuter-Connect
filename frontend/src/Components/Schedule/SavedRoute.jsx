import React from 'react'
import './Styles/SavedRoute.css'
import walking from '../../assets/walking.png'
import trainLogo from '../../assets/trainLogo.png'
import star from '../../assets/star.png'

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