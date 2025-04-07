import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import NearbyHeader from "../Components/Nearby/NearbyHeader.jsx";
import BusTracker from "../Components/Nearby/BusTracker.jsx";

export default function Nearby() {
  return (
    <>
      <h1 className="page-title">Nearby</h1>
      <section className="nearby-section">
        <div className="bus-section">
        <NearbyHeader type="bus" title="Buses" image="src/assets/nearby/headerBus.svg" />
        <BusTracker/>
        </div>
        <NearbyHeader type="train" title="Trains" image="src/assets/nearby/headerTrain.svg" />
      </section>
    </>
  );
}
