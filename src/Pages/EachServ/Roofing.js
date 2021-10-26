import React from "react";
// import "./door.css";
import cardData from "../../Seeds/services";

import doors from "../../assets/roof/roof1.jpg";
import floor from "../../assets/roof/roof2.jpg";
import bathroom from "../../assets/roof/roof3.jpg";
import painting from "../../assets/roof/roof4.jpg";
import electrical from "../../assets/roof/roof5.jpg";
import roofing from "../../assets/roof/roof6.jpg";
import plumbing from "../../assets/roof/roof7.jpg";


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
            <p className="title text-center">Our services include roof replacement and re-roofing, as well as roof repair. We have the experience, knowledge and expertise that it takes to get your roofing job completed on time and to your satisfaction.</p>
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