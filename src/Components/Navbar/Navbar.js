import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Link to="/"><strong>Samy's Electricity</strong></Link>    
      <nav className="links">
        <ul>
          <li>About Us</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      </div>

    </>
  )
}

export default NavBar;