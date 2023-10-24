import React from "react";
import Navbars from "./Navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Read = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        Read More
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
export default Read;
