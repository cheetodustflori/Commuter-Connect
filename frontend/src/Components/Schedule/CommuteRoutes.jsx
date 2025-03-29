import React, {useState} from 'react'
import './Styles/CommuteRoutes.css'
import SavedRoute from './SavedRoute'
import mapsLogo from '../../../assets/mapImage.png'
import ScrollableRoutes from './ScrollableRoutes'
import AddNewRoute from './AddNewRoute'

const CommuteRoutes = () => {
  const [createNewRoute, setCreateNewRoute] = useState(false);

  const handleCreateNewRoute = () => {
    setCreateNewRoute(!createNewRoute);
};

  return (
    <div className='mainCommuteRoutes'>
        <div className='CommuteRoutes'>
            <h2>Commute Routes</h2>

            <p id='text' >Create or click on an existing route to 
                    show details and get started on your journey!</p>

            <div className='routes'>
                <ScrollableRoutes/>
            </div>
             
        </div>

        <div id='mapAndButton'>
            <img id="mapsLogo" src={mapsLogo}/>
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