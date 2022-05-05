import React from 'react';
import slider1 from '../../Assets/images/slider-1.jpg';
import slider2 from '../../Assets/images/slider-2.jpg';
import slider3 from '../../Assets/images/slider-3.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption text-dark mb-5">
                        <h5>Project Report Writing</h5>
                        <p>A simple, actionable, step-by-step guide to writing the perfect project report.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption text-dark mb-5">
                        <h5>Presentation Writing</h5>
                        <p>Every step you need to write and deliver a powerful presentation that persuades, inspires or informs, including how to nail an online presentation.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100 bg-opacity-50" alt="..." />
                    <div className="carousel-caption text-dark mb-5">
                        <h5>Math Problem Solver</h5>
                        <p>Free math problem solver answers your algebra homework questions with step-by-step explanations.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;