import React from "react";
import "./about.css"

import Photo from "../../assets/about.jpg"

const About = () => {
  return (
    <>
      <div className="aboutUs ">
        <div className="head text-center">

        <h1>About Us</h1>
        </div>
        <div className="first row ">
        <p className="text-center col-lg-6">
          When you need a home repair, simply contact Samy's Restoration®, and we will send you a skilled, qualified craftsman. The craftsman working with an Samy's Restoration® office, provides you with a FREE ESTIMATE and is ready to begin the job right away, staying until it is completed to your satisfaction. Each location is independently owned and operated. In case of hidden problems discovered during the job, the craftsman will stop all work, advise you, and wait for your direction and approval before proceeding.
        </p>
        <img src={Photo} alt="home1" className="right col-md-5 homePict" />
        </div>

        <div className="second row ">
        <img src={Photo} alt="home1" className="left col-md-5 homePict" />
        <p className="text-center col-md-6">
          When you need a home repair, simply contact Samy's Restoration®, and we will send you a skilled, qualified craftsman. The craftsman working with an Samy's Restoration® office, provides you with a FREE ESTIMATE and is ready to begin the job right away, staying until it is completed to your satisfaction. Each location is independently owned and operated. In case of hidden problems discovered during the job, the craftsman will stop all work, advise you, and wait for your direction and approval before proceeding.
        </p>
        </div>
      </div>


    </>
  )
}

export default About;