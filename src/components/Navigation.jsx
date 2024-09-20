import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li> Home</li>
        </NavLink>
        <NavLink to="/About">
          <li> Aboutv</li>
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
