import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa"
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <p id="not-dark" className="Copy text-center">2021 © Samy's Restoration LLC | All Rights Reserved</p>

            <a href="https://www.facebook.com/samyselectric/" >
                <FaFacebook className="faceBook" style={{ size: "20px" }} />
            </a>
            <a href="https://www.instagram.com/samyselectric/">
                <FaInstagram className="InstaGram" style={{ color: "darkorange", size: "20px" }} />
            </a>

        </div>
    )
};

export default Footer;