import React from 'react';
import { Container } from 'react-bootstrap';
import { BsGoogle, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-light mt-5" style={{ height: '300px' }}>
            <Container>
                <div className="container row">
                    <div className="text-dark text-center mt-5 col-md-6">
                        <h2>ProTutor</h2>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-5 col-md-6 text-dark">
                        <h1><BsGoogle></BsGoogle></h1>
                        <h1 className='mx-5'><BsFacebook></BsFacebook></h1>
                        <h1><BsGithub></BsGithub></h1>
                        <h1 className='mx-5'><BsLinkedin></BsLinkedin></h1>
                    </div>
                </div>
                <p className="text-dark text-center mt-5">copyright @2022 Siydul Islam Sojib</p>
            </Container>
        </div>
    );
};

export default Footer;