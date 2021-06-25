import React from 'react';
import cardData from "../../services";
import "./style.css";

import floor from "../../assets/home.jpg";

function image (image) {
    switch (image) {
        case 'floor':
            return floor;
        default:
            break;
    }
}

const CardEl = () => {
    console.log(cardData)
    return (
        <div className="row text-center cardSection">
            {cardData.map(item => (
                    <div className="card" key={item.id}>
                        <img src={image(item.image)} className="card-img-top" alt="images" />
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