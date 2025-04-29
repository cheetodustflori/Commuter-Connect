import React from "react";
import "./Styles/Schedule.css";
import walking from "../../assets/walking.png";
import trainLogo from "../../assets/trainLogo.png";
import star from "../../assets/star.png";

const SavedRoute = ({ routeTitle, totalTime }) => {
  return (
    <div>
      <div id="savedRoute">
        <h3>{routeTitle}</h3>
      </div>

      <div id="savedRoute">
        <p>{totalTime} min</p>
      </div>
      <div id="horizontalLine"></div>
    </div>
  );
};

export default SavedRoute;
