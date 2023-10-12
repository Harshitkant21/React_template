import React from 'react';
import logo from '../assests/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiLogInCircle } from 'react-icons/bi';
import OffCanvasNavbar from './OffCanvasNavbar';
import { Link } from 'react-router-dom';
const Navbars = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold fs-4 p-lg-3 p-mb-2" to="/">
            <img src={logo} alt="" width={30} height={24}/>Agency
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-6 fw-semibold">
              <li className="nav-item mx-4">
                <Link className="nav-link text-white " to="/">Home</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white" to="/AboutUs">About Us</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white" to="/team">Team</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white" to="/contactus">Contact</Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link text-white active" aria-current="page" to="https://www.linkedin.com/in/harshit-kant-856b36229/" target='_blank'>
                    <FaFacebook className="icon " />
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                    <BsSearch className="icon" />
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                    <BiLogInCircle className="icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <OffCanvasNavbar />
        <hr className='text-light'/>
    </>
  )
}

export default Navbars;