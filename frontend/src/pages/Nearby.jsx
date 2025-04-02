import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import NearbyHeader from "../Components/NearbyHeader.jsx";

export default function Nearby() {
  return (
    <>
      <h1 className="page-title">Nearby</h1>
      <section className="nearby-section">
        <NearbyHeader type="bus" title="Buses" image="src/assets/nearby/headerBus.svg" />
        <NearbyHeader type="train" title="Trains" image="src/assets/nearby/headerTrain.svg" />
      </section>
    </>
  );
}
