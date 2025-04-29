import React, { useState, useEffect }  from "react";
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
      setList(list.filter((i) => i !== item)); 
    } else {
      setList([...list, item]); 
    }
  };

  const [placesData, setPlacesData] = useState([]);
    const [loading, setLoading] = useState(true);



    const [locations, setLocations] = React.useState([]);

    // Function to add a new location string to the array
    const addLocation = (newLocationString) => {
      setLocations(prevLocations => [...prevLocations, newLocationString]);
    };
  
    useEffect(() => {
      async function fetchPlaces() {
        try {
          await buildPQ();
          const data = await loadPlaces();
          console.log(data);
          setPlacesData(data);
        } catch (error) {
          console.error("Error loading places:", error);
        } finally {
          setLoading(false);
        }
      }
  
      fetchPlaces();
    }, []);

    async function buildPQ(){
      let response = await fetch(`http://127.0.0.1:5000/buildPQ`, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // body: JSON.stringify(locations)
        },
      });
    }
  
    async function loadPlaces() {
      let response = await fetch(`http://127.0.0.1:5000/getPlaces`, {
        method: "GET",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      let data = await response.json();
      console.log(data);
      return data;
    }


  return (
    <>
      <NavBar />
      <div id="map-section">
      <div id="map-header">
      <div id="map-title-container">
        <div id="map-title">
          <h1>Maps</h1>
          <p>
            View nearby stations and food and study spots for your convenience!
          </p>
          
        </div>
        <div id="vl"></div>
        
        </div>
        
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
      </div>
      
      
    </>
  );
}
