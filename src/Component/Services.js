import React from "react";
import { Link } from "react-router-dom";
import Navbars from "./Navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode, faChartLine, faGem, faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import '../Services.css';

const Services = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <h1 className="fw-bold m-5">
          Our <span className="color_span fs-1">Services</span>
        </h1>
        <div className="row service_row">
          <div className="addonservice">
            <FontAwesomeIcon icon={faLaptopCode} className="addonservice h-25 w-25"/>
            <h2>Web Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="addonservice">
          <FontAwesomeIcon icon={faChartLine} className="addonservice h-25 w-25"/>
            <h2>Marketing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="addonservice">
          <FontAwesomeIcon icon={faGem} className="addonservice h-25 w-25"/>
            <h2>Graphics</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
          <div className="addonservice">
          <FontAwesomeIcon icon={faNetworkWired} className="addonservice h-25 w-25"/>
            <h2>Networking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, quae?
            </p>
          </div>
        </div>
        <p className="lead">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} bounce className="icon-black" />
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Services;
