import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src="s.png" alt="navImg" />
      <ul>
        <NavLink to="/">
          <li> Home</li>
        </NavLink>
        <NavLink to="/About">
          <li> About</li>
        </NavLink>
        <NavLink to="/Formation">
          <li> Formation</li>
        </NavLink>
        <NavLink to="/Contact">
          <li> Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
