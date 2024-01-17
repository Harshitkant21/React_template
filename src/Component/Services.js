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
        <div className="row service_row">
          {
            data.map((e) => {
              return <div className="addonservice">
                <img src={e.image} className="service-image" />
                <h2>{e.service_name}</h2>
                <p>{e.description}</p>
              </div>
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
