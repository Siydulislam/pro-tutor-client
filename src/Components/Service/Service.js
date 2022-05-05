import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, price, image, description } = props.service;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-2 mt-5">
            <div className="card mx-4" style={{ width: "20rem", height: "450px" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: {price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;