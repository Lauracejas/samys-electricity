import React from "react";
import "./homeStyle.css"

import PhotoHero from "../../assets/hero.jpg"
import Photo from "../../assets/home.jpg"

const Homepage = () => {
  return (
    <>  
         <div className="darkBack">
      <img src={PhotoHero} alt="pictureHero" className="pictureHero"/>
        {/* <strong> Samy's Electricity in Charlotte</strong>
        <p> HOME IMPROVEMENT, MAINTENANCE, & REPAIR
        Trust Your Home to Mr. Handyman</p>
        <button>Contact</button> */}
        </div> 

      <div className="Container-fluid">
        <div className="row first">
          <div className="col-md-5 handyman">
          <h1 className=""> Handyman </h1>
          <p className="handy-description"> Is your to-do list growing rapidly? Do you find all your free time being taken up by home repairs and improvements? Well worry no more with Mr. Handyman of South Charlotte! Our expert handymen in South Charlotte are here to handle all your home improvement needs. We work with highly trained home repair professionals who have years of construction industry experience, so you can count on our team for a job well done. We have the expertise, the equipment, and the skill to tackle any home repair or home improvement project. Your satisfaction is our top priority, and we guarantee that our team will treat you and your home with the highest levels of respect.</p>
        </div>
          <img src={Photo} alt="home1" className="col-md-6 homePic " />
        </div>

      </div>
      
    </>
  )
}

export default Homepage;