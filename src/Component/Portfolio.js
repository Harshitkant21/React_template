import React from "react";
import { Link } from "react-router-dom";
import Navbars from "./Navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import '../Portfolio.css';
const Portfolio = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <div class="frame">
          <div class="center">
            <div class="carousel">
              <div class="pre">I'm a </div>
              <div class="change_outer">
                <div class="change_inner">
                  <div class="element">Developer</div>
                  <div class="element">Designer</div>
                  <div class="element">Entrepreneur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
