import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGooglePlusG,
    faFacebook,
    faGithub,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbars from "./Navbar";
import Footer from "./footer";
import "../login.css";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const userData = {
                uname: user,
                password: password,
                uemail: email,
            };

            // Make an API call to signup
            const response = await axios.post("http://localhost:8000/signup", userData);

            if (response.status === 200) {
                let d = response.data;
                console.log(d.msg);
                console.log(response.status);
                navigate("/");
            }
        } catch (error) {
            console.error("Error during signup:", error.message);
        }
    };
    return (
        <>
            <div className="bg-black">
                <Navbars />
            </div>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form onSubmit={handleSignup}>
                        <h1>Signup</h1>
                        <div className="social-icons">
                            <Link className="social">
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </Link>
                            <Link className="social">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link className="social">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <Link className="social">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </div>
                        <span className="acc">or use your account</span>
                        <input
                            type="text"
                            placeholder="Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn btn-large col-lg-10 col-10 mx-auto" id="butt">Signup</button>
                        <div className="options">
                            <Link to="/">Forgot your password?</Link>
                        </div>
                    </form>
                    <div className="alternative-signup">
                        <p>
                            Already have an account? <Link to="/Login">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
