import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../../Assets/images/google-logo.png';
import { auth } from '../../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    const navigate = useNavigate();

    const googleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/checkout");
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    };

    const handleEmail = (event) => {
        const emailInput = event.target.value;

        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };

    const handlePassword = (event) => {
        const passwordInput = event.target.value;

        setPassword({ value: passwordInput, error: "" });
    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }

        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }

        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success("Login successfully", { id: "created" });
                    console.log(user);
                    navigate("/checkout");
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        toast.error("Wrong Password", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleLogin} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="text" className="form-control" name="email" id="email" aria-describedby="emailHelp" />
                </div>
                {email.error && (
                    <p className="text-danger">{email.error}</p>
                )}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" name='password' className="form-control" id="password" />
                </div>
                {password.error && (
                    <p className="text-danger">{password.error}</p>
                )}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="text-center">New to ProTutor? <Link to="/signup">Create New Account</Link></p>
            <div className="d-flex justify-content-center mb-3">
                <hr className="w-25 mx-2" /> or <hr className="w-25 mx-2" />
            </div>
            <button onClick={googleAuth} className="w-50 mx-auto d-flex justify-content-center align-items-center">
                <img style={{ width: "30px" }} src={googleLogo} alt='' />
                <p className="mt-3 mx-3"> Continue with Google </p>
            </button>
        </div>
    );
};

export default Login;