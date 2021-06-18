import React from "react";
import { Link } from "react-router-dom"
// import Logo from '../../logo.svg'
import "./style.css"

const Services = () => {
  return (

    <div className=" services">
      <div className="headServ text-center">
        <h1>Most Popular Services</h1>
      </div>
      <div className="containers ">
        <div className="icons col-sd-4">
          <Link to="/Project">
            <svg xmlns="http://www.w3.org/2000/svg" id="serviceDoor" viewBox="0 0 59.19 96"><title>Doors</title><g><path fill="#fff" d="M38.21 17.79a8.18 8.18 0 00-7.83-5.37c-6 0-8.45 5.3-8.55 5.52a1.59 1.59 0 01-1.43.94h-4.77v31h27.93v-31h-3.87a1.56 1.56 0 01-1.48-1.09zM15.63 83.65h27.93V69.09H15.63zM57.92 0H1.26A1.27 1.27 0 000 1.26v93.48A1.27 1.27 0 001.26 96h56.66a1.27 1.27 0 001.27-1.26V1.26A1.27 1.27 0 0057.92 0zM46.67 85.21a1.56 1.56 0 01-1.56 1.56h-31a1.56 1.56 0 01-1.56-1.56V67.53A1.56 1.56 0 0114.08 66h31a1.56 1.56 0 011.56 1.56zm0-33.72A1.48 1.48 0 0145.2 53H14.12a1.57 1.57 0 01-1.6-1.54V17.29a1.56 1.56 0 011.6-1.52h5.35a12.74 12.74 0 0110.91-6.43 11.18 11.18 0 0110.36 6.43h4.46a1.46 1.46 0 011.47 1.52zm4.14 10.32a2.68 2.68 0 112.68-2.68 2.69 2.69 0 01-2.68 2.68z"></path></g></svg><span>Doors</span>
            </Link>
        </div>
        <div className="icons col-sd-4">
          <Link to="/Project">
        <svg id="serviceFloor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.18 95.18"><g><title>Floors</title><path fill="#fff" fill-rule="evenodd" d="M49.3 45.88h45.88V32.6H49.3zM66 95.18h13.28V49.3H66zm-16.7 0h13.28V49.3H49.3zm33.4 0h12.48V49.3H82.7zM49.3 0v12.48h45.88V0zm0 29.18h45.88V15.9H49.3zm-16.7 16.7h13.28V0H32.6zM0 79.28h45.88V66H0zm0 15.9h45.88V82.7H0zM12.48 0H0v45.88h12.48zM0 62.58h45.88V49.3H0zM29.18 0H15.9v45.88h13.28z"></path></g></svg><span>Floor</span>
        </Link>
        </div>

        <div class="icons col-sd-4">
          <Link to="/Project"><svg id="serviceBath" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 97.8"><title>Bathroom</title><g><path fill="#fff" d="M94 57.05h-5a2 2 0 00.8-1.55V13.69a13.66 13.66 0 00-27.26-1.26l-1.41-.51c-4.6-1.67-10 1.26-12.66 6.81l-1.21-.44a2 2 0 00-1.52.07 1.93 1.93 0 00-1 1.12A2 2 0 0045.9 22l27.26 10a2 2 0 002.54-1.19 2 2 0 00-1.19-2.55l-1.43-.52c1.57-5.94-.72-11.68-5.31-13.36l-1.41-.51v-.16a9.72 9.72 0 0119.44 0V55.5a2 2 0 00.8 1.55H2a2 2 0 100 4h3.83c.3 12.79 4.52 22.57 11.88 27.53a1.9 1.9 0 00-.95.8l-3.19 5.47a2 2 0 00.72 2.72 2 2 0 002.71-.75l3.18-5.47a1.9 1.9 0 00.22-1.26 23 23 0 009.89 2.13H65.7a23 23 0 009.89-2.13 1.93 1.93 0 00.21 1.25l3.2 5.48a2 2 0 001.74 1 2 2 0 001.9-1.46 2 2 0 00-.2-1.51l-3.19-5.48a1.9 1.9 0 00-.95-.8c7.36-5 11.58-14.75 11.88-27.53H94a2 2 0 100-4z"></path></g></svg>
          <span>Bathroom</span>
          </Link>
          </div>


      </div>
    </div>



  )
}

export default Services;