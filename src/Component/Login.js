import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebook,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../login.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("Login");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
    });
  }, []);
  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <div className="signupback">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} bounce className="iconsign" />
            </Link>
          </div>
          <h1>Create Account</h1>
          <div className="social-icons">
            <Link>
              <FontAwesomeIcon icon={faGooglePlusG} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
          <span>or use your email to sign-up</span>
          <input type="text" placeholder="Name" className="input1"/>
          <input type="email" placeholder="Email" className="input1"/>
          <input type="password" placeholder="Password" className="input1"/>
          <button type="submit" className="button1">Sign-Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <div className="loginback">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} bounce className="iconlog" />
            </Link>
          </div>
          <h1>Sign-in</h1>
          <div className="social-icons">
            <Link>
              <FontAwesomeIcon icon={faGooglePlusG} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" className="input1"/>
          <input type="password" placeholder="Password" className="input1"/>
          <a href="/">Forget your password?</a>
          <button type="submit" className="button1">Sign-In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!!</h1>
            <p>Enter your personal details to use more exciting features</p>
            <button className="hidden button1" id="Login">
              Sign-In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!!</h1>
            <p>
              Register with your personal details to enjoy more exciting
              features
            </p>
            <button className="hidden button1" id="register">
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
