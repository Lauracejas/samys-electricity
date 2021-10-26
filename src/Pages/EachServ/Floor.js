import React from "react";
import "./style.css";
import cardData from "../../Seeds/services";

import doors from "../../assets/floor/floor1.jpg";
import floor from "../../assets/floor/floor2.jpg";
import bathroom from "../../assets/floor/floor3.jpg";
import painting from "../../assets/floor/floor4.jpg";
import electrical from "../../assets/floor/floor5.jpg";
import roofing from "../../assets/floor/floor6.jpg";
import plumbing from "../../assets/floor/floor7.jpg";


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
            <p className="title text-center">We offer services like: Plumbing Repairs, Leak Detection, Drain unclogging, Water heater service and installation, Disposals, Sewers, Piping & Repiping, Water Line Replacement</p>
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