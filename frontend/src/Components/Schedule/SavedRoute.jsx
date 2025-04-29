import React from "react";
import "./Styles/Schedule.css";
import walking from "../../assets/walking.png";
import trainLogo from "../../assets/trainLogo.png";
import star from "../../assets/star.png";

const SavedRoute = ({ routeTitle, totalTime, arrivalLocation, departLocation}) => {
  return (
    <button id="savedRoute-button">
      <div id="savedRoute">
        <h3>{routeTitle}</h3>
      </div>

      <div id="savedRoute">
        <p>{totalTime} min</p>
      </div>
      <div id="horizontalLine"></div>
    </button>
  );
};

export default SavedRoute;
