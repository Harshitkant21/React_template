import axios from "axios";
import React from "react";
import Navbars from "./Navbar";
import { useEffect, useState } from "react";
import Footer from "./footer";
import "../Team.css";

const Team = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTeams = async () => {
      const response = await axios.get("http://localhost:8080/businessteam");
      console.log(response);
      setData(response.data);
    }
    getTeams();
  }, []);
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        {/* <div class="aboutAuthor">
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
        </div> */}
        <h1 className="fw-bold m-5">
          Our <span className="color_span fs-1">Team</span>
        </h1>
        <div className="teams">
          {
            data.map((e) => {
              return <div class="card" style={{ width: "10rem" }}>
                <img src={e.profile_picture} class="card-img-top" alt={e.profile_picture} />
                <div class="card-body">
                  <h5 class="card-title">{e.employee_name}</h5>
                  <p class="card-text">{e.designation}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
