import React from "react";
// import ImageGallery from 'react-image-gallery';
import "./style.css";
import cardData from "../../Seeds/services";
// import { useParams } from "react-router-dom";

import doors from "../../assets/doors.jpg";
import floor from "../../assets/door.jpg";
import bathroom from "../../assets/door3.jpg";
import painting from "../../assets/door4.jpg";
import electrical from "../../assets/door5.jpg";
import roofing from "../../assets/door6.jpg";
import plumbing from "../../assets/door7.jpg";

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
            <p className="title text-center">Doors Reparation and new installation</p>
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