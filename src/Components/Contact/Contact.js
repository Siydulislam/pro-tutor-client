import React from 'react';

const Contact = () => {
    return (
        <section className="jumbotron mt-5">
            <h1 className="text-center text-decoration-underline">Contact</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>ProTutor</h1>
                        <p>Let me handle your project professionally.</p>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <input type="text" className="form-control m-2" placeholder="Your email address" />
                            <input type="text" className="form-control m-2" placeholder="Your Name/Company's Name" />
                            <textarea className="form-control m-2" cols="30" rows="10" placeholder="Your massage"></textarea>
                            <button className="btn btn-primary m-2">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;