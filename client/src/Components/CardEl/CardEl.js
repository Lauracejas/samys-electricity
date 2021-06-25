import React from 'react';
import cardData from "../../services";
import "./style.css";

import doors from "../../assets/doors.jpg";
import floor from "../../assets/floori.jpg";
import bathroom from "../../assets/bath.jpg";
import painting from "../../assets/paint.jpg";
import electrical from "../../assets/electic.jpg";
import roofing from "../../assets/roofing.jpg";
import plumbing from "../../assets/plumb.jpg";

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

const CardEl = () => {
    console.log(cardData)
    return (
        <div className=" text-center cardSection">
            {cardData.map(item => (
                    <div className="card"  key={item.id}>
                        <img src={image(item.image)} className="card-img" alt="images" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="/" className="btn btn-primary">See my work</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );

}

export default CardEl;