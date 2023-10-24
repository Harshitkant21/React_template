import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Navbars from "./Navbar";
import Footer from "./footer";
import "../Aboutus.css";
import image2 from "../assests/Place2.png";
const AboutUs = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <div class="aboutAuthor">
          <div class="K2_bio">
            <img alt="About " src={image2} />

            <h2> Harshit Kant</h2>
            <div class="h-divider">
              <div class="shadow"></div>
              <div class="text2"></div>
            </div>
            <p>
              {" "}
              I am a passionate student of computer science who has a strong
              commitment to cultivating creativity and a determined ambition to
              make substantial contributions. The individual has a notable
              ability to adapt and a great passion for seeking out new
              educational opportunities. The person has a considerable degree of
              proficiency in Java programming and web development, skillfully
              using these capabilities to translate novel concepts into
              practical manifestations. Committed to using creativity, optimism,
              and expertise to provide support and empower people to flourish.
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
