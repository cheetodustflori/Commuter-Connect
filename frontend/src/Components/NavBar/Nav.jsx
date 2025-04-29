import React from "react";
import Header from "./Header";
import MobileNav from "./MobileNavigation";
import "../../../styles.css";
import { NavLink } from "react-router-dom";

export default function NavBar({user}) {
  return (
    <>
      <nav className="nav">
        <div className="nav-title">Commuter Connect</div>
        <ul className="links">
          <li>
            <NavLink to={`/schedule?prop=${user}`} className={({ isActive }) => (isActive ? "active" : "")}>Schedule</NavLink>
          </li>
          <li>
            <NavLink to="/map" className={({ isActive }) => (isActive ? "active" : "")}>Map</NavLink>
          </li>
          <li>
          <NavLink to="/friends" className={({ isActive }) => (isActive ? "active" : "")}>Friends</NavLink>
          </li>
          <li>
          <NavLink to="/nearby" className={({ isActive }) => (isActive ? "active" : "")}>Events</NavLink>
          </li>
          <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Your Profile</NavLink>
          </li>
        </ul>

        <MobileNav />
      </nav>
      <Header />
    </>
  );
}
