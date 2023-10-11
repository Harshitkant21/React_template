import React from "react";
import Navbars from "./Navbar";
import place from "../assests/place_image.png"
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
import image5 from "../assests/Place5.png";
import image6 from "../assests/Place6.png";
import image7 from "../assests/Place7.png";

const Home = () => {
  return (
    <div className="container-fluid p-0">
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
              <p class="inner_content fs-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam saepe reiciendis cumque eum. Eos provident tempora
                ipsam.Laudantium, quaerat accusamus.
              </p>
            </div>
            <div className="col-lg-7 col-0"></div>
            <button
              type="button"
              className="col-lg-2 col-6 btn btn-warning text-light rounded-5"
              id="butt"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* home ends here */}
      {/* first content starts here */}
      <div className="content_first m-lg-5 m-2 p-lg-5 p-2">
        <div className="inner_content row justify-content-center flex-md-wrap">
          <div className="content_about col-12 col-lg-6  fs-1 fw-bold flex-md-wrap">
            <p className="text-black">Welcome</p>
            <p className="color_span">for Professionals</p>
            <div className="para d-flex justify-content-evenly w-100 m-lg-1">
              <div className="img d-flex align-baseline p-2">
                <img src={quote} alt="quote here" width={35} height={25} />
              </div>
              <div className="text fs-6 fw-light text-black me-lg-1 mt-lg-2 ">
                <p className="w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="text fs-6 fw-light text-black d-flex justify-content-evenly w-75 mt-lg-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="but mt-lg-5 mt-mb-2"></div>
            <button
              type="button"
              className="col-lg-3 col-6 btn btn-warning text-light rounded-5 mb-4 mt-4"
              id="butt"
            >
              Read More
            </button>
          </div>
          <div className="about_image col-12 col-lg-6 fs-5 fw-bold d-flex flex-column justify-content-end flex-md-wrap ">
            <div className="text_inner text-light mb-5 w-100 ">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Enim, sunt. Facilis incidunt dicta doloremque voluptas,
                  adipisci ut.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="inner_cont m-1 m-lg-4 p-1 p-lg-1">
                <div className="item_1_content w-100 "style={{ maxHeight: '100%' }}>
                  <div className="img1 row">
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                        <img src={item1} alt="icon 1" width={50} height={50} />
                    </div>
                    <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                      <p className="color_span fw-bold fs-3">Creative Works</p>
                      <p className="font text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla id cum repellat libero fugiat maiores hic
                        natus suscipit voluptatibus enim.
                      </p>
                    </div>
                  </div>
                  <div className="img1 row">
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                        <img src={item2} alt="icon 1" width={50} height={50} />
                    </div>
                    <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                      <p className="color_span fw-bold fs-3">Creative Works</p>
                      <p className="font text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla id cum repellat libero fugiat maiores hic
                        natus suscipit voluptatibus enim.
                      </p>
                    </div>
                  </div>
                  <div className="img1 row">
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                        <img src={item3} alt="icon 1" width={50} height={50} />
                    </div>
                    <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                      <p className="color_span fw-bold fs-3">Creative Works</p>
                      <p className="font text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla id cum repellat libero fugiat maiores hic
                        natus suscipit voluptatibus enim.
                      </p>
                    </div>
                  </div>
                  <div className="img1 row">
                    <div className="d-lg-flex justify-content-lg-start d-flex justify-content-center col-lg-2 col-12">
                        <img src={item4} alt="icon 1" width={50} height={50} />
                    </div>
                    <div className="icon1_content text-center text-lg-start col-lg-10 mt-lg-0 mt-0">
                      <p className="color_span fw-bold fs-3">Creative Works</p>
                      <p className="font text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla id cum repellat libero fugiat maiores hic
                        natus suscipit voluptatibus enim.
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
                <p className="color_span ">Creative</p>
                <p className="text-light fs-6 fw-normal m-lg-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt reiciendis libero soluta accusamus ullam ipsum eum.
                </p>
                <button type="button" className="col-lg-6 col-10 btn btn-warning text-light rounded-5" id="butt">
                    Read More
                </button>
              </div>
            </div>
            <div className="second_img text-center d-lg-flex justify-content-lg-center flex-lg-column d-flex justify-content-center flex-column col-lg-3 col-10">
              <div className="img2 fs-5 fw-semibold">
                <img src={item4} alt="icon 1" width={50} height={50} />
                <p className="color_span ">Creative</p>
                <p className="text-light fs-6 fw-normal m-lg-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt reiciendis libero soluta accusamus ullam ipsum eum.
                </p>
                <button type="button" className="col-lg-6 col-10 btn btn-warning text-light rounded-5" id="butt">
                    Read More
                </button>
              </div>
            </div>
            <div className="inner_process_content col-12 col-lg-5">
            <p className="text-black fs-1 fw-bold">Welcome</p>
            <p className="color_span fs-2 fw-bold">for Professionals</p>
            <div className="text fs-6 fw-light text-black">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="second_last d-lg-flex d-flex flex-lg-row col-lg-12 col-12">
              <div className="img4 col-1 m-2">
                <img
                  src={check_points}
                  alt="check_points here"
                  width={20}
                  height={220}
                />
              </div>
              <div className="img4_content fs-6 fw-semibold col-12">
                <p className="para mb-lg-4 mb-4">
                  Lorem ipsum dolor sitconsectetur adipiscing
                </p>
                <p className="para mb-lg-4 mb-4">
                  Lorem ipsum dolor sitconsectetur adipiscing
                </p>
                <p className="para mb-lg-4 mb-4">
                  Lorem ipsum dolor sitconsectetur adipiscing
                </p>
                <p className="para mb-lg-4 mb-4">
                  Lorem ipsum dolor sitconsectetur adipiscing
                </p>
                <p className="para mb-lg-4 mb-4">
                  Lorem ipsum dolor sitconsectetur adipiscing
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
            <p className="text-light fs-1 fw-bold d-inline-block ">Buisness</p>
            <p className="color_span fs-1 fw-bold d-inline-block ">Team</p>
          </div>
          <div className="inner_team_content_2">
            <p className="text-light fs-6 fw-normal text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              libero sit cum neque vel veritatis? Quos ratione voluptas soluta,
              est facilis delectus impedit nobis quidem ut aliquam eligendi,
              minus sapiente? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi earum nobis adipisci ad.
            </p>
          </div>
            <div className="inner_team_images row justify-content-lg-center justify-content-sm-center align-items-center m-4 m-lg-4 p-3 p-lg-1">
                <div class="image1 col-lg-3 col-md-auto col-sm-auto text-center">
                    <img src={image1} alt="image_1" width={200} height={250} class="mx-auto" />
                </div>
                <div class="image2 col-lg-3 col-md-auto col-sm-auto text-center">
                    <img src={image2} alt="image_2" width={200} height={250} class="mx-auto" />
                </div>
                <div class="image3 col-lg-3 col-md-auto col-sm-auto text-center">
                    <img src={image3} alt="image_3" width={200} height={250} class="mx-auto" />
                </div>
                <div class="image4 col-lg-3 col-md-auto col-sm-auto text-center">
                    <img src={image4} alt="image_4" width={200} height={250} class="mx-auto" />
                </div>
            </div>
        </div>
      </div>
      {/* forth content ends here */}
      {/* fifth content starts here */}
      {/* <div className="portfolio">
        <div className="inner_portfolio d-flex flex-lg-column m-lg-5 p-lg-5 bg-danger">
          <div className="portfolio_image1 d-flex position-relative flex-lg-column w-75 bg-gradient">
            <div className="d-flex position-relative flex-lg-row w-75 align-items-center bg-gradient">
              <div className="image_1 w-50">
                <img src={image5} alt="image_here" width={350} height={250} />
              </div>
              <div className="content_image w-50 m-lg-2 p-lg-5">
                <p className="text-light fs-1 fw-bold ">We have</p>
                <p className="color_span fs-1 fw-bold">Served</p>
              </div>
            </div>
            <div className="d-flex position-relative flex-lg-row w-75 bg-gradient">
              <div className="image_2 w-50">
                <img src={image6} alt="image_here" width={200} height={200} />
              </div>
              <div className="image_3 w-75">
                <img src={image7} alt="image_here" width={300} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* fifth content ends here */}
    </div>
  );
};
export default Home;
