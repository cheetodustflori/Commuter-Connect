import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar/Nav";
import GoogleMap from "../Components/Map/GoogleMap";
import { useState } from "react";

export default function Map() {
  const [activeStations, setActiveStations] = useState([]);
  const [activeFood, setActiveFood] = useState([]);
  const [activeStudy, setActiveStudy] = useState([]);

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item)); // remove it
    } else {
      setList([...list, item]); // add it
    }
  };

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
              <li
                id="bus-stations"
                className={activeStations.includes("bus") ? "active" : ""}
                onClick={() =>
                  toggleItem("bus", activeStations, setActiveStations)
                }
              >
                Bus Stations
              </li>

              <li
                id="train-stations"
                className={activeStations.includes("train") ? "active" : ""}
                onClick={() =>
                  toggleItem("train", activeStations, setActiveStations)
                }
              >
                Train Stations
              </li>
            </ul>
          </div>

          <div id="food" className="grid-item">
            <h3>Food</h3>
            <ul>
              <li
                id="fast-food"
                className={activeFood.includes("fast") ? "active" : ""}
                onClick={() => toggleItem("fast", activeFood, setActiveFood)}
              >
                Fast Food
              </li>

              <li
                id="cafe"
                className={activeFood.includes("cafe") ? "active" : ""}
                onClick={() => toggleItem("cafe", activeFood, setActiveFood)}
              >
                Cafe
              </li>
              <li
                id="groceries"
                className={activeFood.includes("groceries") ? "active" : ""}
                onClick={() =>
                  toggleItem("groceries", activeFood, setActiveFood)
                }
              >
                Groceries
              </li>
            </ul>
          </div>

          <div id="study" className="grid-item">
            <h3>Study Spots</h3>
            <ul>
              <li
                id="library"
                className={activeStudy.includes("library") ? "active" : ""}
                onClick={() =>
                  toggleItem("library", activeStudy, setActiveStudy)
                }
              >
                Library
              </li>
              <li
                id="campus-space"
                className={activeStudy.includes("campus-space") ? "active" : ""}
                onClick={() =>
                  toggleItem("campus-space", activeStudy, setActiveStudy)
                }
              >
                Campus Space
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="map-container">
      <GoogleMap/>
      </div>
      
    </>
  );
}
