import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbars from "./Navbar";
import quote from "../assests/quote.png";
import item1 from "../assests/Icon_1.png";
import item2 from "../assests/Icon_2.png";
import item3 from "../assests/Icon_3.png";
import item4 from "../assests/Icon_4.png";
import check_points from "../assests/check_points.png";
import image1 from "../assests/Place1.png";
import image2 from "../assests/Place2.png";
import image3 from "../assests/Place3.png";
import image4 from "../assests/Place4.png";
import image8 from "../assests/Place8.png";
import image10 from "../assests/Place10.png";
import logo from "../assests/logo.png";
import item5 from "../assests/Icon_5.png";
import item6 from "../assests/Icon_6.png";
import item7 from "../assests/Icon_7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faVk,
  faYoutube,
  faLinkedin,
  faDigg,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./footer";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get("http://localhost:8080/testimonials");
      console.log(response);
      setData(response.data);
    }
    getTestimonials();
  }, []);
  return (
    <div className="container-fluid m-0">
      {/* home starts here */}
      <div className="header">
        <div className="navigation">
          <Navbars />
        </div>
        <div className="head_content m-lg-5 m-2 p-lg-5 p-2">
          <div className="row text-light fs-1 fw-bold text-center text-lg-start justify-content-center justify-content-lg-start">
            <div className="col-lg-5 col-12">
              <p class="creative">
                Creative Idea <br />
                for <strong className="color_span">Professionals</strong>
              </p>
            </div>
            <div className="col-lg-7 col-0"></div>
            <div className="col-lg-5 col-12">
              <p class="inner_content fs-6 fw-medium">
                Agency is committed to provide the best discounts on a broad
                variety of goods and services. We provide web design, marketing,
                networking, and graphics. Discover amazing deals on our website
                now!!
              </p>
            </div>
            <div className="col-lg-7 col-0"></div>
            <Link to="/Read" className="text-decoration-none">
              <button
                type="button"
                className="col-lg-2 col-6 btn btn-warning text-light rounded-5"
                id="butt"
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* home ends here */}
      {/* first content starts here */}
      <div className="content_first m-lg-5 m-1 p-lg-5 p-1">
        <div className="inner_content row justify-content-center flex-md-wrap">
          <div className="content_about col-12 col-lg-6 fs-1 fw-bold flex-md-wrap text-center text-lg-start">
            <p className="text-black">Welcome</p>
            <p className="color_span">for Professionals</p>
            <div className="para d-flex justify-content-center m-lg-1">
              <div className="img d-flex align-baseline p-2">
                <img src={quote} alt="quote here" width={35} height={25} />
              </div>
              <div className="text fs-6 fw-light text-black me-lg-1 mt-lg-2">
                <p className="w-100 text-center text-lg-start">
                  At Agency, we provide both friendly service and serious
                  knowledge. For us, professionalism is knowing how to deal with
                  the issues at hand. As a result, we've assembled a helpful
                  online forum and library of materials to ensure your success.
                </p>
              </div>
            </div>
            <div className="text fs-6 fw-light text-black d-flex justify-content-evenly mt-lg-4 text-center text-lg-start">
              Here at Agency, we understand the difficulties and possibilities
              that you confront as a professional. If you're an established
              professional, a budding entrepreneur, an experienced CEO, or a new
              college student, this site was built with you in mind. We are
              completely dedicated to your success.
            </div>
            <div className="but mt-lg-5 mt-mb-2"></div>
            <Link to="/Read" className="text-decoration-none">
              <button
                type="button"
                className="col-lg-3 col-6 btn btn-warning text-light rounded-5 mb-4 mt-4"
                id="butt"
              >
                Read More
              </button>
            </Link>
          </div>
          <div className="about_image col-12 col-lg-6 fs-5 fw-bold d-flex flex-column justify-content-end flex-md-wrap ">
            <div className="text_inner text-light mb-5">
              <p>Welcome to the Next Level of Professionalism</p>
            </div>
          </div>
        </div>
      </div>
      {/* first content ends here */}
      {/* second content starts here */}
      <div className="services">
        <div className="inner_services row m-lg-3 m-0 p-lg-2 p-0">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="inner_cont fs-1 fw-bolder m-lg-5 p-lg-5 m-1 p-1">
              <div className="services_content1">
                <p className="text-light mb-lg-0">Our Company</p>
                <p className="color_span mt-lg-0">great services</p>
              </div>
              <div className="services_content2 fs-6 fw-light text-white justify-content-center w-100 col-12 col-lg-6">
                <p>
                  We strive hard and provide great service. Our tailored
                  services help you achieve. Our expert staff guarantee project
                  success. Thinking forward lets us provide unique services. All
                  we want is happy customers. Our goods are great. Success takes
                  teamwork, so choose Agency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="inner_cont m-1 m-lg-4 p-1 p-lg-1">
              <div
                className="item_1_content w-100 "
                style={{ maxHeight: "100%" }}
              >
                <div className="img1 row">
                  <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                    <img src={item1} alt="icon 1" width={50} height={50} />
                  </div>
                  <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                    <p className="color_span fw-bold fs-3 text-uppercase">
                      Graphics
                    </p>
                    <p className="font text-white">
                      Injecting your brand with artistic flare, our graphic
                      designers produce eye-catching, memorable images.
                    </p>
                  </div>
                </div>
                <div className="img1 row">
                  <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                    <img src={item2} alt="icon 1" width={50} height={50} />
                  </div>
                  <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                    <p className="color_span fw-bold fs-3">Web Design</p>
                    <p className="font text-white">
                      Our agency provides exceptional services to boost
                      customers' internet operations. To increase your online
                      visibility and audience engagement, our web designers
                      construct appealing, user-friendly websites.
                    </p>
                  </div>
                </div>
                <div className="img1 row">
                  <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                    <img src={item3} alt="icon 1" width={50} height={50} />
                  </div>
                  <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                    <p className="color_span fw-bold fs-3">Marketing</p>
                    <p className="font text-white">
                      Data-driven marketing from our professionals boosts your
                      business. Our SEO and social media marketing may boost
                      your business.
                    </p>
                  </div>
                </div>
                <div className="img1 row">
                  <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                    <img src={item4} alt="icon 1" width={50} height={50} />
                  </div>
                  <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                    <p className="color_span fw-bold fs-3">Networking</p>
                    <p className="font text-white">
                      With our networking solutions, your company can count on
                      uninterrupted connectivity, streamlined data flow, and
                      robust security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second content end here */}
      {/* third content starts here */}
      <div className="process">
        <div className="inner_process m-lg-5 m-4 p-lg-2 p-4 row">
          <div className="first_img text-center justify-content-lg-center flex-lg-column d-flex justify-content-center flex-column col-lg-3 col-10">
            <div className="img2 fs-5 fw-semibold">
              <img src={item1} alt="icon 1" width={50} height={50} />
              <p className="color_span ">GRAPHICS</p>
              <p className="text-light fs-6 fw-normal m-lg-3">
                Injecting your brand with artistic flare, our graphic designers
                produce eye-catching, memorable images.
              </p>
              <Link to="/Read" className="text-decoration-none">
                <button
                  type="button"
                  className="col-lg-6 col-10 btn btn-warning text-light rounded-5"
                  id="butt"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="second_img text-center d-lg-flex justify-content-lg-center flex-lg-column d-flex justify-content-center flex-column col-lg-3 col-10">
            <div className="img2 fs-5 fw-semibold">
              <img src={item4} alt="icon 1" width={50} height={50} />
              <p className="color_span ">Networking</p>
              <p className="text-light fs-6 fw-normal m-lg-3">
                With our networking solutions, your company can count on
                uninterrupted connectivity, streamlined data flow, and robust
                security.
              </p>
              <Link to="/Read" className="text-decoration-none">
                <button
                  type="button"
                  className="col-lg-6 col-10 btn btn-warning text-light rounded-5"
                  id="butt"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="inner_process_content col-12 col-lg-5 text-center text-lg-start">
            <p className="text-black fs-1 fw-bold">Welcome</p>
            <p className="color_span fs-2 fw-bold">for Professionals</p>
            <div className="text fs-6 fw-light text-black text-center text-lg-start">
              <p>
                We prioritise efficiency and effectiveness at Agency to ensure
                your happiness and corporate success. Our careful approach
                creates a productive and pleasant working relationship.
              </p>
            </div>
            <div className="second_last d-lg-flex d-flex flex-lg-row col-lg-12 col-12 text-start">
              <div className="img4 col-1 m-2">
                <img
                  src={check_points}
                  alt="check_points here"
                  width={20}
                  height={220}
                />
              </div>
              <div className="img4_content fs-6 fw-semibold col-12">
                <p className="para mt-lg-2 mb-lg-4 mb-1">
                  Each meeting begins with a discussion of goals.
                </p>
                <p className="para mb-lg-4 mb-1">
                  We create a plan tailored to your objectives.
                </p>
                <p className="para mb-lg-4 mb-1">
                  We apply design,marketing, networking, images.
                </p>
                <p className="para mb-lg-4 mb-1">
                  Our findings determine our modifications.
                </p>
                <p className="para mb-lg-4 mb-1">
                  Tracks progress with transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third content ends here */}
      {/* forth content starts here */}
      <div className="team">
        <div className="inner_team m-lg-5 m-1 p-lg-5 p-1 row">
          <div className="inner_team_content_1 text-light fs-1 fw-bold text-center text-lg-center col-12 col-lg-12 m-2 p-2 m-lg-0 p-lg-0">
            <p className="text-light fs-1 fw-bold d-inline-block ">
              Business &nbsp;
            </p>
            <p className="color_span fs-1 fw-bold d-inline-block ">Team</p>
          </div>
          <div className="inner_team_content_2">
            <p className="text-light fs-6 fw-normal text-center">
              Learn more about the dedicated people that make up Agency by
              talking to them. Our team is made up of a diverse group of highly
              experienced people, each of whom brings a significant amount of
              their own unique experience, knowledge, and perspective to the
              table. We are passionate about the job that we do and are
              committed to supporting you in accomplishing the goals that you
              have set for yourself.
            </p>
          </div>
          <div className="inner_team_images row justify-content-lg-center justify-content-sm-center align-items-center m-1 m-lg-4 p-1 p-lg-1">
            <div class="image1 col-lg-3 col-md-auto col-sm-auto text-center">
              <img
                src={image1}
                alt="image_1"
                width={200}
                height={250}
                class="mx-auto mb-4"
              />
            </div>
            <div class="image2 col-lg-3 col-md-auto col-sm-auto text-center">
              <img
                src={image2}
                alt="image_2"
                width={200}
                height={250}
                class="mx-auto mb-4"
              />
            </div>
            <div class="image3 col-lg-3 col-md-auto col-sm-auto text-center">
              <img
                src={image3}
                alt="image_3"
                width={200}
                height={250}
                class="mx-auto mb-4"
              />
            </div>
            <div class="image4 col-lg-3 col-md-auto col-sm-auto text-center">
              <img
                src={image4}
                alt="image_4"
                width={200}
                height={250}
                class="mx-auto mb-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* forth content ends here */}
      {/* fifth content starts here */}
      <div className="Case_Study">
        <div className="inner_case m-lg-2 m-1 p-lg-0 p-1 row">
          <div className="inner_case_content text-light fs-1 fw-bold text-center text-lg-center col-12 col-lg-12 m-0 p-0 m-lg-0 p-lg-0">
            <p className="text-black fs-1 fw-bold d-inline-block ">
              Case &nbsp;
            </p>
            <p className="color_span fs-1 fw-bold d-inline-block ">Study</p>
          </div>
          <div className="inner_case_content_1 text-center text-lg-center fw-semibold fs-6">
            Discover some of the concrete outcomes of working with our
            organisation. Using these examples, we can see how Agency has helped
            different businesses overcome unique obstacles and accomplish
            remarkable feats via collaborative efforts.
          </div>
          <div className="images_case row flex-wrap m-2 mt-lg-5 p-2 pt-lg-5">
            <div className="image_case_1 col-lg-4 col-12">
              <img
                src={image8}
                alt="image_here"
                height={250}
                className="w-100"
              />
            </div>
            <div className="col-lg-4 col-12">
              <div className="image_case_2 text-center text-lg-center d-flex flex-column justify-content-center align-items-center w-100 p-3 h-100">
                <p className="color_span fs-5 fw-bold">Scaffold Supply, USA</p>
                <p className="text-white fs-6">
                  Scaffold Supply, USA is the construction industry's trusted
                  scaffolding supplier. They realised they needed to increase
                  their internet presence to attract more clients and boost
                  efficiency.
                </p>
                <Link to="/Read" className="text-decoration-none">
                  <button
                    type="button"
                    className="col-lg-12 col-12 btn btn-warning text-light rounded-5"
                    id="butt"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
            <div className="image_case_3 col-lg-4 col-12">
              <img
                src={image10}
                alt="image_here"
                height={250}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* fifth content ends here */}
      {/* sixth content start here */}
      <div className="testimonials">
        <div className="m-lg-5 m-1 p-lg-5 p-1 h-75">
          <div className="text-light fs-1 fw-bold text-center text-lg-center col-12 col-lg-12 m-0 p-0 m-lg-0 p-lg-0">
            <p className="text-black fs-1 fw-bold d-inline-block">Client&nbsp;</p>
            <p className="color_span fs-1 fw-bold d-inline-block">Testimonials</p>
          </div>
          <div className="row testimonials-row overflow-auto d-flex flex-wrap justify-content-around align-items-center">
            {data.map((e) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={e.id}>
                <div className="card h-100 border-0 shadow-lg mt-5 mb-5">
                  <div className="card-img-top p-3" style={{ backgroundColor: '#fff', borderRadius: '10px 10px 0 0'}}>
                    <img src={e.image} alt={e.image} className="rounded-circle" style={{ width: "100%",height: "200px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                  </div>
                  <div className="card-body p-3">
                    <h5 className="card-title mb-1">{e.uname}</h5>
                    <p className="card-text">{e.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* sixth content ends here */}
      {/* seventh content start here */}
      <div className="touch">
        <div className="inner_touch m-lg-0 m-0 p-lg-0 p-0 row">
          <div className="inner_touch_first col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="content_touch m-5 p-5 m-lg-5 p-lg-5 text-center text-lg-start">
              <p className="text-white display-5 fw-bold">Get &nbsp;</p>
              <p className="color_span fs-1 fw-bold">in Touch</p>
              <p className="text-white fs-6 fw-normal">
                Ask us for help or guidance. Please use the form or email below
                to contact us.
              </p>
              <button
                type="button"
                className="col-lg-6 col-12 btn btn-warning text-light rounded-5 border-0"
                id="butt"
              >
                <Link
                  to="/ContactUs"
                  className="text-decoration-none text-light"
                >
                  Click for Query
                </Link>
              </button>
            </div>
          </div>
          <div className="inner_touch_second col-12 col-lg-6">
            <div className="content_touch m-1 p-4 m-lg-1 p-lg-1 mt-lg-5 text-center text-lg-start">
              <div className="content_logo">
                <a class="navbar-brand text-black fw-bold fs-4" href="/">
                  <img src={logo} alt="" width={40} height={35} />
                  Agency
                </a>
                <p className="touch_content m-2 m-lg-2 p-2 p-lg-2">
                  Need assistance, have questions, or want to discuss how our
                  services might benefit your company? Our assistance is
                  available. Please use these ways to contact us:
                </p>
              </div>
              <div className="address_touch m-2 m-lg-3 p-2 p-lg-3">
                <div className="add_1 row">
                  <div className="col-2 col-lg-2">
                    <img src={item5} alt="icon 1" width={45} height={45} />
                  </div>
                  <div className="icon1_content col-10 col-lg-10 text-lg-start text-start text-break">
                    <p className="text-black fw-semibold fs-4">Email</p>
                    <p className="text-black fw-normal fs-6">
                      harshit0576.be21@chitkara.edu.in
                    </p>
                  </div>
                </div>
                <div className="add_2 row">
                  <div className="col-2 col-lg-2">
                    <img src={item6} alt="icon 1" width={45} height={45} />
                  </div>
                  <div className="icon1_content col-10 col-lg-10 text-lg-start text-start">
                    <p className="text-black fw-semibold fs-4">Call Us!</p>
                    <p className="text-black fw-normal fs-6 m-0 m-lg-0">
                      +123 456 7890
                    </p>
                    <p className="text-black fw-normal fs-6">+123 456 7890</p>
                  </div>
                </div>
                <div className="add_3 row">
                  <div className="col-2 col-lg-2">
                    <img src={item7} alt="icon 1" width={45} height={45} />
                  </div>
                  <div className="icon1_content col-10 col-lg-10 text-lg-start text-start">
                    <p className="text-black fw-semibold fs-4">Address</p>
                    <p className="text-black fw-normal fs-6 col-12 col-lg-8">
                      Chitkara University,Rajpura,Punjab
                    </p>
                  </div>
                </div>
                <div className="add_icons row m-2 m-lg-3 p-lg-3 p-2">
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      bounce
                      className="icon_black"
                    />
                  </a>
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGooglePlusG}
                      bounce
                      className="icon_black"
                    />
                  </a>
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://vk.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faVk}
                      bounce
                      className="icon_black"
                    />
                  </a>
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      bounce
                      className="icon_black"
                    />
                  </a>
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://www.linkedin.com/in/harshit-kant-856b36229/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      bounce
                      className="icon_black"
                    />
                  </a>
                  <a
                    class="nav-link active col-2 col-lg-2 "
                    aria-current="page"
                    href="https://digg.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faDigg}
                      bounce
                      className="icon_black"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* seventh content ends here */}
      {/* eighth content start here */}
      <div className="Footer">
        <Footer />
      </div>
      {/* eighth content end here */}
    </div>
  );
};
export default Home;
