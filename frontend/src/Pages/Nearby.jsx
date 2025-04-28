import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import NearbyHeader from "../Components/Nearby/NearbyHeader.jsx";
import BusTracker from "../Components/Nearby/BusTracker.jsx";
import TrainTracker from "../Components/Nearby/TrainTracker.jsx";
import TestTracker from "../Components/Nearby/TestTracker.jsx";

export default function Nearby() {
  return (
    <>
    <NavBar/>
      <h1 className="page-title">Nearby</h1>
      <section className="nearby-section">
        <div className="bus-section">
        <NearbyHeader id="bus-header" type="bus" title="Buses" image="src/assets/nearby/headerBus.svg" />
        {/* <BusTracker/> */}
        </div>
        <div className="train-section">
        <NearbyHeader type="train" title="Trains" image="src/assets/nearby/headerTrain.svg" />
        {/* <TrainTracker/> */}
        </div>
       
      </section>
    </>
  );
}


// export default function Nearby() {
//   return (
//     <>
//     <NavBar/>
//       <h1 className="page-title">Nearby</h1>
//       <TestTracker/>
       
//     </>
//   );
// }