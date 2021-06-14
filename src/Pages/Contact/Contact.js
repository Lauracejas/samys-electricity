import React from "react";
import "./contact.css"

const Contact = () => {
    const contact = {
        contactUrl: "https://github.com/kaustubhai/portfolio-template/blob/master/src/components/section/Contact.js"

    };
    return (
        <div className="contact">
            <h1 className="heading">Contact Me</h1>
            <div className="container ">

                <div className=" row blueBack">

                    <div className="typeZone col-md-6 ">
                        <form action={"https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                            <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                            <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                            <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                            <textarea id="msg" name="message" placeholder="How can I help you?" required></textarea>
                        </form>
                            <button style={{ cursor: 'pointer' }} className="btn btn-secondary" type="submit"><label style={{ cursor: 'pointer' }} id="not-dark">Send Message</label></button>
                    </div>
                    <div className="linksMe col-md-6 ">

                        <div className="more-info">
                            <p className="lead">
                            Services from Samy's Electricity are trusted, reliable and professional. Please fill out the form completely, and we will get back to you as soon as possible.
                            </p>
                        </div>
                        <p><i className="fas fa-map-marker-alt"></i> Charlotte, NC, 28270</p>
                        <p><i className="fas fa-phone"></i><a href="tel:9802750597"> (980) 275 0597</a></p>
                        <p><i className="far fa-envelope"></i><a href="mailto:ruben@gmail.com"> ruben@gmail.com</a></p>
                        <div className="buttonz">
                            <a href="/" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                                <i className="ion-social-linkedin"></i>
                            </span>LinkedIn</a>
                            <a href="/" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                                <i className="ion-social-github"></i>
                            </span>Instagram</a>
                            <a href="/" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                                <i className="ion-social-codepen"></i>
                            </span>Resume</a>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Contact;


// export default Contact;