import React from "react";
import "./about.css"

import Photo from "../../assets/electrical/livingroom.jpg"

const About = () => {
  return (
    <>
      <div className="aboutUs ">
        <div className="head text-center">

          <h1>About Us</h1>
        </div>
        <div className="first row ">
          <p className="text-center col-lg-6">
            When you need an electrical home repair, simply contact Samy's Electrical Services®, and we will send you a skilled, qualified electrician. The electrician working with an Samy's Electrical Services® office, provides you with a FREE ESTIMATE and is ready to begin the job right away, staying until it is completed to your satisfaction. Each location is independently owned and operated. In case of hidden problems discovered during the job, the craftsman will stop all work, advise you, and wait for your direction and approval before proceeding.
          </p>
          <img src={Photo} alt="home1" className="right col-md-5 homePict" />
        </div>

        <div className="second row text-center ">
          
            <h4>Samy's Electrical Services® GUARANTEE</h4>
          <p className="text-center">
          We provide a wide variety of electric services, including but not limited to electrical installations, electrical repairs as well as electric panel upgrades, lighting installations, flickering lights, Ring doorbells, tripping breakers. Every job is handled with professionalism, exceptional service, quality craftsmanship and honest solutions that meet the specific needs of your home, family, and budget.
          </p>
        </div>
      </div>


    </>
  )
}

export default About;