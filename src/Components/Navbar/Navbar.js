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
            <Link to="/"><strong>Samy's Electricity</strong></Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{backgroundColor: "#fff", alignItems: "center"}}/>
            <Navbar.Collapse id="responsive-navbar-nav " >
                <Nav className="mr-auto">


                </Nav>
                <Nav>
                    <Nav.Link >
                        <Link  style={{color: "#fff"}} to="/cart" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                            About Us
                           </Link>

                    </Nav.Link>
                    
                        <Nav.Link >
                            <Link style={{color: "#fff"}} to="/signin"   className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Services
                               </Link>
                        </Nav.Link>
                        
                        <Nav.Link >

                            <Link style={{color: "#fff"}} to="/signin" className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}>
                                Projects
                                 </Link>
                        </Nav.Link>
                    
                    <Nav.Link>
                        <Link  style={{color: "#fff"}} to="/inventory" className={location.pathname === "/inventory" ? "nav-link active" : "nav-link"}>
                            Contact Us
                            </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link style={{color: "#fff"}} to="/profile" className={location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
                            {props.userLog?.user ?
                                <p>{props.userLog?.user.name} </p> : <p>{props.user?.name}</p>
                            }
                        </Link>
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </>
  )
}

export default NavBar;