import React from "react";
import { Link } from "react-router-dom"
import "./homeStyle.css"

// import PhotoHero from "../../assets/hero.jpg"
import Photo from "../../assets/electrical/casa4.jpg"

const Homepage = () => {
  return (
    <>
      <div className="heroPic row">

        <div className="backOpacity col-md-4 position-absolute top-40 end-0 translate-middle-y">
          <h4> Samy's Electrical Service </h4>
          <p> We are Residential & Commercial Electricians</p>
            <Link to="/Contact">
            <button  type="button" className="btn btn-danger">Contact Us</button>
            </Link>
        </div>
      </div>


      <div className="Container-fluid content">
        <div className="row first">
          <div className="col-md-5 handyman">
            <h1 className=""> Samy's Electrical Services </h1>
            <p className="handy-description">Samy's Electrical Service is a family-owned and operated company comprised of licensed Charlotte electricians. Our expertise is everything electrical inside and outside of a home. We have been Keeping Our Clients Safe Since 2008 and giving peace of mind that our licensed electricians can solve the smallest to largest issue in your house. We will advise you through all of your choices in each job, follow up with transparent communication and perform the work in a craftsman-like manner giving each client the care they deserve. We never cut corners and focus on safety, efficiency and quality. We look forward to serving you for all of your electrical needs.</p>
          </div>
          <img src={Photo} alt="home1" className="col-md-5 homePic " />
        </div>

      </div>

    </>
  )
}

export default Homepage;