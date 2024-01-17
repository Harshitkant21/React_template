import axios from "axios";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbars from "./Navbar";
import Footer from "./footer";
import "../login.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        uemail: email,
        password: password,
      };

      const response = await axios.post("http://localhost:8000/login_users", userData);

      if (response.status === 200) {
        let d = response.data;
        console.log(d.msg);
        console.log(response.status);
        navigate("/");
      } else {
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during Login:", error.message);
      if (error.response) {
        alert("Username not found");
        console.log("Error message from server:", error.response.data);
      } else if (error.request) {
        console.log("No response received from server");
      } else {
        console.log("Error setting up the request", error.message);
      }
    }
  };

  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
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
            <button type="submit" className="btn btn-large col-lg-10 col-10 mx-auto" id="butt">Login</button>
            <div className="options">

              <Link to="/">Forgot your password?</Link>
            </div>
          </form>
          <div className="alternative-signup">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
