import React from "react";
import Header from "./Header";
import "../../styles.css";

export default function NavBar() {
  return (
    <>
    <nav className="nav">
      <div className="nav-title">Commuter Connect</div>
      <ul className="links">
        <li>
          <a href="/">Schedule</a>
        </li>
        <li>
          <a href="/map">Map</a>
        </li>
        <li>
          <a href="/nearby">Nearby</a>
        </li>
        <li>
          <a href="/friends">Friends</a>
        </li>
      </ul>
      <a href="/profile" className="profile">Your Profile</a>
      <img className="hamburger" src="src/assets/hamburger.svg"/>
    </nav>
    <Header/>
    </>
  );
}
