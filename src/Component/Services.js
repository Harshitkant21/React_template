import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbars from "./Navbar";
import Footer from "./footer";
import '../Services.css';

const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get("http://localhost:8080/services");
      console.log(response);
      setData(response.data);
    }
    getServices();
  }, []);
  return (
    <>
      <div className="bg-black">
        <Navbars />
      </div>
      <div className="container">
        <h1 className="fw-bold m-5">
          Our <span className="color_span fs-1">Services</span>
        </h1>
        <div className="service_row d-flex flex-wrap justify-content-around align-items-center">
          {data.map((e) => (
            <div className="card mb-4 service-card" style={{ width: "18rem", backgroundColor: "#fff", color: "#333", borderRadius: "10px", overflow: "hidden", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)" }} key={e.id}>
              <img
                src={e.image}
                className="card-img-top service-image"
                style={{ width: "100%", height: "200px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
                alt={e.image}
              />
              <div className="card-body">
                <h5 className="card-title">{e.service_name}</h5>
                <p className="card-text">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
