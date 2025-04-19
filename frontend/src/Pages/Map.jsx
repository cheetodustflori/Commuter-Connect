import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";

export default function Map() {
  return (
    <>
      <NavBar />
      <div id="map-header">
        <div id="map-title">
          <h1>Maps</h1>
          <p>
            View nearby stations and food and study spots for your convenience!
          </p>
        </div>
        <div id="vl"></div>
        <div id="map-options">
            <div id="stations" className="grid-item">
                <h3>Stations</h3>
                <ul>
                    <li id="bus-stations">Bus Stations</li>
                    <li id="train-stations">Train Stations</li>
                </ul>
            </div>
            <div id="food" className="grid-item">
            <h3>Food</h3>
                <ul>
                    <li id="fast-food">Fast Food</li>
                    <li id="cafe">Cafe</li>
                    <li id="groceries">Groceries</li>
                </ul>
            </div>
            <div id="study" className="grid-item">
            <h3>Study Spots</h3>
                <ul>
                    <li id="library">Library</li>
                    <li id="campus-space">Campus Space</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
