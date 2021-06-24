import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import CardEl from '../../Components/CardEl/CardEl'
import Photo from "../../assets/close.jpg";

const Services = () => {
  return (
    <div>
      <div className=" services row">
        <div className="headServ text-center">
          <h1>Most Popular Services</h1>
        </div>
        <div className=" containers horizontal ">
          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg xmlns="http://www.w3.org/2000/svg" id="serviceDoor" viewBox="0 0 59.19 96"><title>Doors</title><g><path fill="#fff" d="M38.21 17.79a8.18 8.18 0 00-7.83-5.37c-6 0-8.45 5.3-8.55 5.52a1.59 1.59 0 01-1.43.94h-4.77v31h27.93v-31h-3.87a1.56 1.56 0 01-1.48-1.09zM15.63 83.65h27.93V69.09H15.63zM57.92 0H1.26A1.27 1.27 0 000 1.26v93.48A1.27 1.27 0 001.26 96h56.66a1.27 1.27 0 001.27-1.26V1.26A1.27 1.27 0 0057.92 0zM46.67 85.21a1.56 1.56 0 01-1.56 1.56h-31a1.56 1.56 0 01-1.56-1.56V67.53A1.56 1.56 0 0114.08 66h31a1.56 1.56 0 011.56 1.56zm0-33.72A1.48 1.48 0 0145.2 53H14.12a1.57 1.57 0 01-1.6-1.54V17.29a1.56 1.56 0 011.6-1.52h5.35a12.74 12.74 0 0110.91-6.43 11.18 11.18 0 0110.36 6.43h4.46a1.46 1.46 0 011.47 1.52zm4.14 10.32a2.68 2.68 0 112.68-2.68 2.69 2.69 0 01-2.68 2.68z"></path></g></svg><span>Doors</span>
            </Link>
          </div>
          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg id="serviceFloor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 95.18"><g><title>Floors</title><path fill="#fff" fillRule="evenodd" d="M49.3 45.88h45.88V32.6H49.3zM66 95.18h13.28V49.3H66zm-16.7 0h13.28V49.3H49.3zm33.4 0h12.48V49.3H82.7zM49.3 0v12.48h45.88V0zm0 29.18h45.88V15.9H49.3zm-16.7 16.7h13.28V0H32.6zM0 79.28h45.88V66H0zm0 15.9h45.88V82.7H0zM12.48 0H0v45.88h12.48zM0 62.58h45.88V49.3H0zM29.18 0H15.9v45.88h13.28z"></path></g></svg><span>Floor</span>
            </Link>
          </div>

          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg id="serviceBath" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 97.8"><title>Bathroom</title><g><path fill="#fff" d="M94 57.05h-5a2 2 0 00.8-1.55V13.69a13.66 13.66 0 00-27.26-1.26l-1.41-.51c-4.6-1.67-10 1.26-12.66 6.81l-1.21-.44a2 2 0 00-1.52.07 1.93 1.93 0 00-1 1.12A2 2 0 0045.9 22l27.26 10a2 2 0 002.54-1.19 2 2 0 00-1.19-2.55l-1.43-.52c1.57-5.94-.72-11.68-5.31-13.36l-1.41-.51v-.16a9.72 9.72 0 0119.44 0V55.5a2 2 0 00.8 1.55H2a2 2 0 100 4h3.83c.3 12.79 4.52 22.57 11.88 27.53a1.9 1.9 0 00-.95.8l-3.19 5.47a2 2 0 00.72 2.72 2 2 0 002.71-.75l3.18-5.47a1.9 1.9 0 00.22-1.26 23 23 0 009.89 2.13H65.7a23 23 0 009.89-2.13 1.93 1.93 0 00.21 1.25l3.2 5.48a2 2 0 001.74 1 2 2 0 001.9-1.46 2 2 0 00-.2-1.51l-3.19-5.48a1.9 1.9 0 00-.95-.8c7.36-5 11.58-14.75 11.88-27.53H94a2 2 0 100-4z"></path></g></svg>
              <span>Bathroom</span>
            </Link>
          </div>

          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg id="servicePainting" height="87" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.87 390.24"><title>Painting</title><g><path d="M283.42 28.11h-35.51V7.92A8 8 0 00240 0H7.92A8 8 0 000 7.92v68a8 8 0 007.92 7.88H240a8 8 0 007.92-7.92V52h15.94v74s.43 2.35-1.41 2.78-116.93 51.76-134.11 59.42c-1.39.62-2.13 1-2.13 3.1v42.22h-21.73v16.82h4.43v120.42s0 19.48 26.12 19.48 26.12-19.48 26.12-19.48V250.35h4.43v-16.83h-20.16v-25a2.21 2.21 0 011.46-2.29l138.8-63.36a2.25 2.25 0 001.18-2.29V31.19a2.9 2.9 0 00-3.44-3.07" fill="#fff"></path></g></svg>
              <span>Painting</span>
            </Link>
          </div>

          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg xmlns="http://www.w3.org/2000/svg" height="87" version="1.1" id="serviceElect" viewBox="0 0 512.432 512.432"><g><g><path d="M424.091,324.128L188.293,89.419c-4.139-4.139-10.901-4.139-15.061,0.021l-42.091,42.091c-4.16,4.16-4.16,10.923,0,15.083    l13.781,13.803l-66.368,66.368c-42.901,42.901-45.035,110.763-7.467,156.8L3.12,451.552c-4.16,4.16-4.16,10.923,0,15.083    l42.667,42.667c2.091,2.091,4.821,3.115,7.552,3.115s5.461-1.045,7.552-3.115l67.968-67.968    c21.504,17.536,47.531,26.859,73.835,26.859c30.037,0,60.096-11.435,82.965-34.304l66.368-66.368l13.781,13.781 c4.117,4.117,10.816,4.16,14.976,0.107l43.221-42.091c2.048-2.005,3.2-4.736,3.221-7.573    C427.248,328.907,426.096,326.133,424.091,324.128z" fill="#fff" /></g></g><g><g><path d="M372.379,11.936c-15.872-15.893-41.749-15.893-57.621,0l-86.827,86.827l57.877,57.621l86.677-86.699   c7.701-7.701,11.947-17.92,11.947-28.821C384.432,29.963,380.187,19.744,372.379,11.936z" fill="#fff" /></g></g><g><g><path d="M500.357,139.936c-15.872-15.893-41.749-15.893-57.621,0l-86.528,86.528l57.899,57.621l86.379-86.379    c7.701-7.701,11.947-17.92,11.947-28.821S508.187,147.744,500.357,139.936z" fill="#fff" /></g></g></svg>
              <span>Electricity</span>
            </Link>
          </div>

          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="serviceRoof" height="87" viewBox="0 0 45.84 45.84"><g><g>
                <g><path d="M45.26,21.65L24.316,0.705c-0.74-0.741-2.051-0.741-2.791,0L0.578,21.65c-0.771,0.771-0.771,2.021,0,2.792  c0.771,0.771,2.021,0.801,2.793,0.029l2.442-2.414h34.216l2.44,2.414c0.387,0.385,0.891,0.562,1.396,0.562s1.011-0.2,1.396-0.586  C46.033,23.68,46.033,22.421,45.26,21.65z M9.759,17.998l5.573-5.571l5.57,5.571H9.759z M18.124,9.689l4.795-4.794l4.795,4.794 l-4.795,4.794L18.124,9.689z M24.937,17.998l5.568-5.572l5.57,5.572H24.937z" fill="#fff" /><path d="M6.601,43.539c0,1.194,0.996,2.152,2.188,2.152H37.05c1.193,0,2.161-0.958,2.161-2.152V24.005H6.601V43.539z   M24.394,30.328c0-0.772,0.629-1.401,1.4-1.401h3.148c0.771,0,1.399,0.628,1.399,1.401v7.038c0,0.774-0.628,1.402-1.399,1.402  h-3.148c-0.771,0-1.4-0.627-1.4-1.402V30.328z M15.524,30.329c0-0.772,0.628-1.401,1.4-1.401h3.092c0.772,0,1.4,0.628,1.4,1.401 v7.037c0,0.774-0.628,1.402-1.4,1.402h-3.092c-0.772,0-1.4-0.627-1.4-1.402V30.329z" fill="#fff" /></g></g></g></svg>
              <span>Roofing</span>
            </Link>
          </div>

          <div className="icons col-sd-4">
            <Link to="/Project">
              <svg xmlns="http://www.w3.org/2000/svg" height="87" viewBox="0 0 56 56" ><g id="servicePlumb" fill="none" fillRule="evenodd"><g id="007---Pipe" fill="rgb(0,0,0)" ><path id="Shape" d="m22 38c0 2.209139-1.790861 4-4 4s-4-1.790861-4-4v-34h-12v34c0 8.836556 7.163444 16 16 16s16-7.163444 16-16v-2h-12zm-16-11c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-14c0-.5522847.44771525-1 1-1s1 .4477153 1 1zm0-18c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1z" fill="#fff" /><path id="Shape" d="m16 1c0-.55228475-.4477153-1-1-1h-14c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1h14c.5522847 0 1-.44771525 1-1z" fill="#fff" /><rect id="Rectangle-path" height="12" rx="1" width="16" x="20" y="22" fill="#fff" /><path id="Shape" d="m55 54h-14c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h14c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z" fill="#fff" /><path id="Shape" d="m42 18v34h12v-34c0-8.836556-7.163444-16-16-16s-16 7.163444-16 16v2h12v-2c0-2.209139 1.790861-4 4-4s4 1.790861 4 4z" fill="#fff" /></g></g></svg>
              <span>Plumbing</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="sectionOne row">
          <p className="col-sm-8  textClose">
            Samy's Restoration is proud to help residential and commercial customers by delivering professional, reliable maintenance, repairs, and other improvements, promptly, on-budget, and on time. We are a customer-focused company and seek to change your mind about maintenance companies when you need to schedule an appointment – yesterday. Our work is backed with a two-year warranty, so you can trust that we strive to exceed your expectations for a job well done.
          </p>
          <img src={Photo} alt="close1" className="col-sm-3 closePic " />
        </div>

        <div className="ourServices ">
          <h4 className="text-left">Our Services</h4>
          <ul className="col-sm-3 text-left">
            <li>Electricity</li>
            <li>Carpentry</li>
            <li>Electrical</li>
            <li>Maintenance services</li>
            <li>Plumbing</li>
            <li>Remodeling</li>
            <li>Painting</li>
            <li>Kitchen upgrades</li>
            <li>Drywall</li>
            <li>Roofing</li>
            <li>Ceramic & Laminate Flooring</li>
            <li>Door Repair & Installation</li>
            <li>Flooring installation, repair and maintenance</li>
          </ul>
          
        </div>

        <p className=" sectionOne textClose">
          We realize you have strict budgets to add here to when you’re running a business, and we’re here to provide honest, upfront and free estimates, with a lightning-fast response time. From your first interaction with our Customer Care Center and even after your job is complete, you will enjoy the utmost respect and courtesy from our staff. We value our customers and want to cultivate lasting professional relationships with them. Discover the Samy's Restoration difference, and contact us today to learn more about our service offerings.
        </p>



      </div>
    </div> 



  )
}

export default Services;