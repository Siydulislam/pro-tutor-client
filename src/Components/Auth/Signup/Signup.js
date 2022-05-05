import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../../Assets/images/google-logo.png';

const Signup = () => {
    return (
        <div className="container mt-5">
            <form className="w-50 mx-auto">
                <h2>Signup</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name='confirmPass' className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
            <div className="d-flex justify-content-center mb-3">
                <hr className="w-25 mx-2" /> or <hr className="w-25 mx-2" />
            </div>
            <button className="w-50 mx-auto d-flex justify-content-center align-items-center">
                <img style={{ width: "30px" }} src={googleLogo} alt='' />
                <p className="mt-3 mx-3"> Continue with Google </p>
            </button>
        </div>
    );
};

export default Signup;