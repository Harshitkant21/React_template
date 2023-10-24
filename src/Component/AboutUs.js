import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Navbars from "./Navbar";
import Footer from "./footer";
import '../Aboutus.css';
const AboutUs = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <div class="aboutAuthor">
          <div class="K2_bio">
            <img
              alt="About "
              src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
            />

            <h2> Harshit Kant</h2>
            <div class="h-divider">
              <div class="shadow"></div>
              <div class="text2"></div>
            </div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              pretium augue non orci pharetra, eget dictum ante sagittis.
              Suspendisse eu nibh justo. Cras scelerisque urna lectus. Praesent
              rhoncus ut risus quis convallis. Praesent nec lorem eros.
            </p>
            <div class="h-divider">
              <div class="shadow"></div>
            </div>
            <p className="lead">
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} bounce className="icon-black" />
              </Link>
            </p>
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
