import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '../../../Assets/images/google-logo.png';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { auth } from '../../../Firebase/Firebase.init';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const Signup = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    const navigate = useNavigate();

    const googleAuth = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate("/checkout");
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

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
        if (passwordInput.length < 8) {
            setPassword({ value: "", error: "Password must contain 8 characters" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
            setPassword({
                value: "",
                error: "Password must contain a capital letter",
            });
        } else if (!/(?=.*[a-z])/.test(passwordInput)) {
            setPassword({
                value: "",
                error: "Password must contain a small letter",
            });
        } else {
            setPassword({ value: passwordInput, error: "" });
        }
    };

    const handleConfirmPassword = (event) => {
        const confirmPasswordInput = event.target.value;

        if (confirmPasswordInput !== password.value) {
            setConfirmPassword({ value: "", error: "Password didn't match" });
        } else {
            setConfirmPassword({ value: confirmPasswordInput, error: "" });
        }
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast.success("Verify your email", { id: "send" });
            })
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (confirmPassword.value === "") {
            setConfirmPassword({
                value: "",
                error: "Password confirmation is required",
            });
        }
        if (email.value && password.value === confirmPassword.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    verifyEmail();
                    toast.success("Account created successfully", { id: "created" });
                    navigate("/checkout");
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    if (errorMessage.includes("already-in-use")) {
                        toast.error("Email already in use", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">Signup</h2>
            <form onSubmit={handleSignup} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" className="form-control" name="email" id="email1" aria-describedby="emailHelp" />
                </div>
                {email?.error && (
                    <p className="text-danger">{email.error}</p>
                )}
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" name='password' className="form-control" id="password" />
                </div>
                {password?.error && (
                    <p className="text-danger">{password.error}</p>
                )}
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name='confirmPassword' className="form-control" id="confirmPassword" />
                </div>
                {confirmPassword?.error && (
                    <p className="text-danger">{confirmPassword.error}</p>
                )}
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
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

export default Signup;