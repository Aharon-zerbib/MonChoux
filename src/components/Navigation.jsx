import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";
import "../style/Navigation.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <NavLink to="/">
        <img src="s.png" alt="navImg" />
      </NavLink>
      <nav ref={navRef}>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Formation">Formation</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
