import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { auth } from '../../../Firebase/Firebase.init';

const Header = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout successfully", { id: "created" });
            })
            .catch(error => {
                toast.error("Something went wrong", { id: "error" });
            });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">ProTutor</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {user?.uid ? (
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <Link onClick={handleLogout} to="/login" className="nav-link">Logout</Link>
                        </ul>
                    ) : (
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <Link className="nav-link" to="/login">Login</Link>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;