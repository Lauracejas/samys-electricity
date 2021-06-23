import React from 'react';
import cardData from "../../services"

const CardEl = () => {
    return (
        <>
            {cardData.map(item => (
                    <div className="card" key={item.id}>
                        <img src={item.image} className="card-img-top" alt="images" />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))
            }
        </>
    );

}

export default CardEl;