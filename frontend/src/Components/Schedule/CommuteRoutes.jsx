import React, {useState} from 'react'
import './Styles/CommuteRoutes.css'
import SavedRoute from './SavedRoute'
import mapsLogo from '../../assets/mapImage.png'
import ScrollableRoutes from './ScrollableRoutes'
import AddNewRoute from './AddNewRoute'

const CommuteRoutes = () => {
    const [createNewRoute, setCreateNewRoute] = useState(false);

    const handleCreateNewRoute = () => {
        setCreateNewRoute(!createNewRoute);
    };

    const handleShowSavedRoute = () => {
        
    };

    const savedRoutes = [
        <SavedRoute
            isFavorite={true}
            isBus={true}
            isWalking={true}/>,
        <SavedRoute
            isFavorite={true}
            isBus={true}
            isWalking={true}/>,
        <SavedRoute
            isFavorite={true}
            isBus={true}
            isWalking={true}/>,
        <SavedRoute
            isFavorite={true}
            isBus={true}
            isWalking={true}/>,
        <SavedRoute
            isFavorite={true}
            isBus={true}
            isWalking={true}/>
    ]

  return (
    <div className='mainCommuteRoutes'>
        <div className='CommuteRoutes'>
            <h2>Commute Routes</h2>

            <h3 style={{fontWeight: "normal"}} id='text' >Create or click on an existing route to 
                    show details and get started on your journey!</h3>

            {/* <div className='routes'>
                <ScrollableRoutes/>
            </div> */}

            <div className='routes'>
                <div className='savedRoutesNew'>
                    {savedRoutes.map((route, index) => (

                        <button key={index} id='thisRoute'  >
                            {route}
                            <hr id='horizontalLine'></hr>
                        </button>

                    ))}
                </div>
                
            </div>
             
        </div>

        <div id='mapAndButton'>
            {/* <img id="mapsLogo" src={mapsLogo}/>    */}
            
            <iframe src="{{embed_url}}"></iframe>
            <button id='newRouteButton' onClick={handleCreateNewRoute}>Create New Route</button>
        </div>

        

        {/* {createNewRoute && (
            <>
                <AddNewRoute/>
            </>
        )} */}
        
    </div>
  )
}

export default CommuteRoutes