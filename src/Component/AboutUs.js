import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Navbars from "./Navbar";
import Footer from "./footer";

const AboutUs = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <div className="text-center">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">About Us</h1>
              <p className="lead">Create By Harshit</p>
              <p className="lead">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faHouse}
                    bounce
                    className="icon-black"
                  />
                </Link>
              </p>
            </main>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
