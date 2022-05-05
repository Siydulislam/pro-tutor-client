import React from 'react';
import sojibImage from '../../Assets/images/sojib-image.jpg';

const About = () => {
    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <img src={sojibImage} alt="" className="w-50 rounded-circle" />
            <h4 className="mx-3">In short, my goal is to secure a position in IT industry. For this, I have some strategy to achieve that goal. Through practice and more practice of my own I will achieve my goal.</h4>
        </div>
    );
};

export default About;