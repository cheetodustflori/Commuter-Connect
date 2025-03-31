import React from "react";
import "../../../styles.css";

const NavLinks = () => {
  return (
    <>
      <nav className="navlinks">
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
        <a href="/profile" className="profile">
          Your Profile
        </a>
      </nav>
    </>
  );
}

export default NavLinks;
