import React from "react";
import { Link } from "react-router-dom";
import Navbars from "./Navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Team = () => {
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <div className="text-center">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Teams</h1>
              <p className="lead">Worked As Solo..</p>
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
      <Footer />
    </>
  );
};

export default Team;
