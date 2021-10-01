import React from "react";
import "./style.css";
import cardData from "../../Seeds/services";

import doors from "../../assets/bath/bath1.jpg";
import floor from "../../assets/bath/bath2.jpg";
import bathroom from "../../assets/bath/bath3.jpg";
import painting from "../../assets/bath/bath4.jpg";
import electrical from "../../assets/bath/bath5.jpg";
import roofing from "../../assets/bath/bath6.jpg";
import plumbing from "../../assets/bath/bath7.jpg";


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
            <p className="title text-center"></p>
            <div className="row text-center cardSection">
            {cardData.map(item => (
                    <div className="card"  key={item.id}>
                        <img src={image(item.image)} style={{width:"300px", height:"300px"}} className="card-img" alt="images" />
                        
                    </div>
                ))
            }
        </div>
        
        </div>

    ) 
  
}

export default MyGallery;