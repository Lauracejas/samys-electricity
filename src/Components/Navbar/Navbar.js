import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {
  const location = useLocation();
  return (
    <>
      {/* <div className="header">
        <Link to="/"><strong>Samy's Electricity</strong></Link>    
      <nav className="links">
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      </div> */}


      <Navbar collapseOnSelect expand="lg" className="bg header" >
            <Navbar.Brand >
            <Link to="/" className="hide-sm show-lg"><strong>Samy's Electrical Services</strong></Link>
            <Link to="/" className="show-sm hide-lg"><strong>Samy's</strong></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: "#fff", alignItems: "center"}}/>
            <Navbar.Collapse id="responsive-navbar-nav" collapseOnSelect={true} className="justify-content-end" style={{ backgroundColor: "rgb(184, 18, 18)", zIndex: 1}} >
                <Nav>
                    <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} href="/About" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                        About Us
                    </Nav.Link>
                    
                    <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} href="/Services"   className={location.pathname === "/Services" ? "nav-link active" : "nav-link"}>
                        Services
                    </Nav.Link>
                        
                    <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} href="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                        Projects
                    </Nav.Link>
                    
                    <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} href="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                        Contact Us
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavBar;