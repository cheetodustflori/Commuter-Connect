import React from 'react'
import './Styles/CommuteRoutes.css'
import SavedRoute from '../../../Components/Schedule/SavedRoute'
import mapsLogo from '../../../Images/mapImage.png'

const CommuteRoutes = () => {
  return (
    <div className='mainCommuteRoutes'>
        <div className='CommuteRoutes'>
            <h2>Commute Routes</h2>

            <p id='text' >Create or click on an existing route to 
                    show details and get started on your journey!</p>

            <div className='routes'>

                <div className='savedRoutes'>

                    <div>
                        <SavedRoute
                        isFavorite={true}
                        isBus={true}
                        isWalking={true}/>
                        <hr id='horizontalLine'></hr>
                    </div>
                    <div>
                        <SavedRoute
                        isFavorite={true}
                        isBus={true}
                        isWalking={true}/>
                        <hr id='horizontalLine'></hr>
                    </div>
                    <div>
                        <SavedRoute
                        isFavorite={true}
                        isBus={true}
                        isWalking={true}/>
                        <hr id='horizontalLine'></hr>
                    </div>
                </div>
                
            </div>
             
        </div>

        <div id='mapAndButton'>
            <img id="mapsLogo" src={mapsLogo}/>
            <button id='newRouteButton'>Create New Route</button>
        </div>
        
    </div>
  )
}

export default CommuteRoutes