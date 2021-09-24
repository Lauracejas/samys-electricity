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


      <Navbar collapseOnSelect expand="lg"  className="bg header" >
            <Navbar.Brand >
            <Link to="/"><strong>Samy's Electrical Services</strong></Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor: "#fff", alignItems: "center"}}/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >            
                <Nav>
                    <Nav.Link >
                        <Link  style={{color: "#fff", backgroundColor: "rgb(184, 18, 18)"}} to="/About" className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                            About Us
                           </Link>

                    </Nav.Link>
                    
                        <Nav.Link >
                            <Link style={{color: "#fff", backgroundColor: "rgb(184, 18, 18)"}} to="/Services"   className={location.pathname === "/Services" ? "nav-link active" : "nav-link"}>
                                Services
                               </Link>
                        </Nav.Link>
                        
                        <Nav.Link >

                            <Link style={{color: "#fff", backgroundColor: "rgb(184, 18, 18)"}} to="/Projects" className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                                Projects
                                 </Link>
                        </Nav.Link>
                    
                    <Nav.Link>
                        <Link  style={{color: "#fff", backgroundColor: "rgb(184, 18, 18)"}} to="/Contact" className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                            Contact Us
                            </Link>
                    </Nav.Link>
                    

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </>
  )
}

export default NavBar;