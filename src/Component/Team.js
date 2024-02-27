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
      <div className="container ">
        <h1 className="fw-bold m-5">
          Our <span className="color_span fs-1">Team</span>
        </h1>
        <div className="teams d-flex flex-wrap justify-content-around align-items-center">
          {data.map((employee) => (
            <div className="card mb-4" style={{ width: "18rem", backgroundColor: "#fff", color: "#333", borderRadius: "10px", overflow: "hidden", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)" }} key={employee.id}>
              <img src={employee.profile_picture} className="card-img-top" alt={employee.employee_name} style={{ width: "100%", height: "200px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
              <div className="card-body">
                <h5 className="card-title">{employee.employee_name}</h5>
                <p className="card-text">{employee.designation}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
