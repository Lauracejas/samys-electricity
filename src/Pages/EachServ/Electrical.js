import React from "react";
// import "./door.css";
import cardData from "../../Seeds/services";

import doors from "../../assets/electrical/elect3.jpg";
import floor from "../../assets/electrical/elect4.jpg";
import bathroom from "../../assets/electrical/elect5.jpg";
import painting from "../../assets/electrical/elect6.jpg";
import electrical from "../../assets/electrical/elect7.jpg";
import roofing from "../../assets/electrical/elect2.jpg";
import plumbing from "../../assets/electrical/electric1.jpg";


function image (image) {
    switch (image) {
        case 'doors':
            return doors;
        case 'floor':
            return floor;
        case 'bathroom':
            return bathroom;
        case 'painting':
            return painting;
        case 'electrical':
            return electrical;
        case 'roofing':
            return roofing;
        case 'plumbing':
            return plumbing;
        default:
            break;
    }
}

console.log(image);

const MyGallery = () => {
    return (
        <div>
            <p className="title text-center">Lighting Installation, Lighting repair, Electrical repair, Socket and switch installation, Electrical Panel Replacement & Installation & more.</p>
            <div className="row text-center cardSection">
            {cardData.map(item => (
                    <div className="card"  key={item.id}>
                        <img src={image(item.image)} style={{width:"100%", height:"300px"}} className="card-img" alt="images" />
                        
                    </div>
                ))
            }
        </div>
        
        </div>

    ) 
  
}

export default MyGallery;