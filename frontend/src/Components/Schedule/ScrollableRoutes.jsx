import React from 'react'
import './Styles/ScrollableRoutes.css'
import SavedRoute from './SavedRoute'

const ScrollableRoutes = () => {
  return (
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
  )
}

export default ScrollableRoutes