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
            <h3 style={{fontWeight: 'normal'}}>School</h3>
            <h3>to</h3>
            <h3 style={{fontWeight: 'bold'}}>Home</h3>
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
            <h3 style={{fontWeight: 'normal'}}>1 Hour 23 Min</h3>

        </div>
        

    </div>
  )
}

export default SavedRoute