import React, {useState} from 'react'
import './Styles/AddNewRoute.css'
import ScrollableRoutes from './ScrollableRoutes'

const AddNewRoute = () => {
    const [isCheckedTrain, setIsCheckedTrain] = useState(false);
    const [isCheckedBus, setIsCheckedBus] = useState(false);
    const [isCheckedWalk, setIsCheckedWalk] = useState(false);

    const [selectedOption, setSelectedOption] = useState("");


  const handleChangeTrain = (event) => {
    setIsCheckedTrain(event.target.checked);
  };

  const handleChangeBus = (event) => {
    setIsCheckedBus(event.target.checked);
  };

  const handleChangeWalk = (event) => {
    setIsCheckedWalk(event.target.checked);
  };

  const handleChange = (event) => {
    const values = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOption(values);
  };


  return (
    <div>
        <h2>Add New Route</h2>
        <p>Add pre-made routes. If you want to create a new route, exit edit mode and create a new route. </p>
        <div className='addNewRoute'>
            <ScrollableRoutes/>
            <div className='routeOptions'>

                <p style={{fontWeight: 'bold'}}>Depart Time: <input name="myInput" /> </p>

                <div>
                    <p id='text' style={{fontWeight: 'bold'}}>Transportation Modes:</p>

                    <div id='options'>

                        <div id='individualCheckBox'>
                            <input type="checkbox" checked={isCheckedTrain} onChange={handleChangeTrain} />
                            <p>Train</p>
                        </div>

                        <div id='individualCheckBox'>
                            <input type="checkbox" checked={isCheckedBus} onChange={handleChangeBus} />
                            <p>Bus</p>
                        </div>

                        <div id='individualCheckBox'>
                            <input type="checkbox" checked={isCheckedWalk} onChange={handleChangeWalk} />
                            <p>Walk</p>
                        </div>

                    </div>

                </div>

                <div id='addCommuteBuddies'>

                    <p style={{fontWeight: 'bold'}}>Add Commute Buddies: </p>
                    <select id="dropdown" value={selectedOption} onChange={handleChange}>
                        <option value="">None Selected</option>
                        <option value="option1">Ted</option>
                        <option value="option2">Robin</option>
                        <option value="option3">Lily</option>
                    </select>

                </div>

                <div id='buttonOptions'>
                    <button id='button' style={{backgroundColor: "#EAEAEA", color: "black", borderColor:  "#EAEAEA"}}>Cancel</button>
                    <button id='button' style={{backgroundColor: "#769EB8"}}>Add Route</button>
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default AddNewRoute