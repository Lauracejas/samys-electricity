import React from 'react';
import { Link } from 'react-router-dom'
import cardData from "../../Seeds/services";
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
        <div className="row text-center cardSection">
            {cardData.map(item => (
                    <div className="card"  key={item.id}>
                        <Link to={item.url} style={{textDecoration:"none"}}>
                        <img src={image(item.image)} className="card-img" alt="images" />
                        <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                            <p className="card-text">{item.description}</p>
                            {/* <a href="/" className="btn btn-primary">See my work</a> */}
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );

}

export default CardEl;