import React from "react";
import { useState } from 'react';
import  emailjs  from 'emailjs-com';
import "./contact.css"

const Contact = () => {
    // const contact = {
    //     contactUrl: "/"

    // };

    // const [toSend, setToSend] = useState({
    //     firstname: '',
    //     Email: '',
    //     Subject: '',
    //     message: '',
    //   });
    
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_ff2b5zq', e.target, 'user_aJUQ488C6B5o1b0uwSIXz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      };
    
    //   const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    //   };
    return (
        <div className="contact">
            <h1 className="heading">Contact Us</h1>
            <div className="container ">

                <div className=" row blueBack">

                    <div className="typeZone col-md-6 ">
                        <form onSubmit={sendEmail}>
                            <input 
                            type="text" 
                            id="fname" 
                            name="firstname" 
                            placeholder="Your name" 
                            required>                                
                            </input>
                            <input 
                            type="email" 
                            id="mailid" 
                            name="email" 
                            placeholder="Email Address" 
                            required></input>
                            <input 
                            type="text" 
                            id="sub" 
                            name="subject" 
                            placeholder="Subject"
                            required></input>
                            <textarea 
                            id="msg" 
                            name="message" 
                            placeholder="How can I help you?" 
                            
                            required></textarea>
                            <input type="submit" className="btn btn-info-secondary" value="Send Mesage"></input>
                        </form>
                            {/* <button sendEmail={sendEmail} style={{ cursor: 'pointer' }} className="btn btn-secondary" type="submit"><label style={{ cursor: 'pointer' }} id="not-dark">Send Message</label></button> */}
                    </div>
                    <div className="linksMe col-md-6 ">

                        <div className="more-info">
                            <p className="lead">
                            Services from Samy's Restoration are trusted, reliable and professional. Please fill out the form completely, and we will get back to you as soon as possible.
                            </p>
                        </div>
                        <p><i className="fas fa-map-marker-alt"></i> Charlotte, NC</p>
                        <p><i className="fas fa-phone"></i><a href="tel:9802750597">(704) 681 2083</a></p>
                        <p><i className="far fa-envelope"></i><a href="mailto:samyselectricllc@gmail.com"> samyselectricllc@gmail.com</a></p>
                        <div className="buttonz">
                            <a href="/" target="blank" id="btn" className="button button-outline button-white"><span className="ico-circle">
                                <i className="ion-social-facebook"></i>
                            </span>Facebook</a>
                            
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Contact;


// export default Contact;