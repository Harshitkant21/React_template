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
        <p>
          Agency prides itself on providing a full range of digital services.
          Explore our entire range of services to understand how we can help you
          succeed:-
        </p>
        <p>
          <span className="color_span fs-5 fw-bold">Web Design:</span> Learn how
          to design beautiful, user-friendly websites that communicate your
          brand's narrative. Our web design services make your website
          attractive and useful.
        </p>
        <p>
          <span className="color_span fs-5 fw-bold">Marketing:</span> Learn how
          our digital marketing methods may boost your company. We provide the
          tools and experience to grow your business via SEO and social media
          management
        </p>
        <p>
          <span className="color_span fs-5 fw-bold">Networking:</span>
          Learn how our networking solutions help keep your company connected
          and protect your data. Our networking infrastructure is safe,
          dependable, and efficient.
        </p>
        <p>
          <span className="color_span fs-5 fw-bold">Graphics:</span> Our graphic
          design services unleash the potential of captivating images. Our
          designers can make distinctive visuals using your brand identity.
        </p>
        <p>
          Our services are designed to help you build a beautiful website,
          increase your marketing, network, or visual branding. Learn more about
          each service and how Agency may be your trusted partner in success by
          clicking the links below.
        </p>
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
