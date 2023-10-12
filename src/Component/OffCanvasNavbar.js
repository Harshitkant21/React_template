import React from 'react';
import "../Navbar.css";
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiLogInCircle } from 'react-icons/bi';
const OffCanvasNavbar = () => {
  return (
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/team">Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item mx-4">
            <Link className="nav-link active" aria-current="page" to="https://www.linkedin.com/in/harshit-kant-856b36229/" target='_blank'>
                <FaFacebook className="icon " />
            </Link>
            </li>
            <li className="nav-item mx-4">
            <Link className="nav-link active" aria-current="page" to="/">
                <BsSearch className="icon" />
            </Link>
            </li>
            <li className="nav-item mx-4">
            <Link className="nav-link active" aria-current="page" to="/">
                <BiLogInCircle className="icon" />
            </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasNavbar;
