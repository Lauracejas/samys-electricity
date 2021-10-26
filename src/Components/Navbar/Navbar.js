import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = (props) => {
    const location = useLocation();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg header" color="faded" light>
                <Navbar.Brand >
                    <Link to="/" className="hide-sm show-lg"><strong>Samy's Electrical Services</strong></Link>
                    <Link to="/" className="show-sm hide-lg"><strong>Samy's</strong></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor: "#fff", alignItems: "center" }} />
                <Navbar.Collapse id="responsive-navbar-nav" collapseOnSelect={true} className="justify-content-end" style={{ backgroundColor: "rgb(184, 18, 18)", zIndex: 1 }} >
                    <Nav >
                        <LinkContainer to="/About">
                            <Nav.Link style={{ color: 'white' }} className={location.pathname === "/About" ? "nav-link active" : "nav-link"}>
                                About Us
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Services">
                            <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} className={location.pathname === "/Services" ? "nav-link active" : "nav-link"}>
                                Services
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Projects">
                            <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}>
                                Projects
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/Contact">
                            <Nav.Link style={{ color: "#fff", backgroundColor: "rgb(184, 18, 18)" }} className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                                Contact Us
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar;
