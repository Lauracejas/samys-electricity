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

        <div className="second row text-center ">
          
            <h4>Samy's Restoration® GUARANTEE</h4>
          <p className="text-center">
            Many homeowners associate home improvement companies with no-show technicians, arbitrary pricing schemes, hit-or-miss workmanship, and a general lack of professionalism. When you choose Samy's Restoration®, we seek to change your mind. Our home repair and maintenance company offers customer-focused solutions from professional handyman technicians dedicated to making sure the job is done right the first time on every level.

            When you choose Samy's Restoration®, your repair, remodel, or maintenance projects will be completed by craftsmen who are licensed, bonded, and insured.  We back our work with a one-year warranty, so you can trust that our work will last. We know what homeowners expect from a home repair company. Samy's Restoration® goes above and beyond.
          </p>
        </div>
      </div>


    </>
  )
}

export default About;