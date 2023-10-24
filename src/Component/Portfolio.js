import React from "react";
import { Link } from "react-router-dom";
import Navbars from "./Navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Portfolio = () => {
  return (
    <>
    <div className="bg-black">
      <Navbars/>
    </div>
      <div className="container">
        <div className="text-center">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Portfolio</h1>
              <p className="lead">In Development Phase</p>
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
      <Footer/>
    </>
  );
};

export default Portfolio;
