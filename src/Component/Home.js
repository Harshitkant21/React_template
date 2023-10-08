import React from 'react'
import Navbars  from "./Navbar";
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
    <div className='container-fluid p-0'>
        {/* home starts here */}
        <div className='header'>
            <div className='navigation'>
                <Navbars/>
            </div>
            <div className='head_content m-lg-5 m-2 p-lg-5 p-2'>
                <div className='row text-light fs-1 fw-bold'>
                    <div className='col-lg-5'>
                        <p class="creative">Creative Idea <br/>for <strong className='color_span'>Professionals</strong></p>
                    </div>
                </div>
                <div className='row text-light fs-6'>
                    <div className='col-lg-5'>
                        <p class="inner_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe reiciendis cumque eum. Eos provident tempora ipsam.Laudantium, quaerat accusamus.</p>
                    </div>
                </div>
                <div className='row mt-lg-5'>
                    <div className='col-lg-5'>
                        <button type="button" className="btn btn-warning text-light rounded-5" id='butt'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        {/* home ends here */}
        {/* first content starts here */}
        <div className='content_first d-flex flex-lg-column justify-content-center align-items-center m-lg-5 m-2 p-lg-5 p-2'>
            <div className='inner_content d-flex flex-lg-row justify-content-center m-auto flex-md-wrap'>
                <div className='content_about d-flex flex-lg-column justify-content-center fs-1 fw-bold w-50 flex-md-wrap'>
                    <p className='text-black'>Welcome</p>
                    <p className='color_span'>for Professionals</p>
                    <div className='para d-flex justify-content-evenly w-100 m-lg-1'>
                        <div className='img d-flex align-baseline p-2'>
                            <img src={quote} alt='quote here' width={35} height={25}/>
                        </div>
                        <div className='text fs-6 fw-light text-black me-lg-1 mt-lg-2 '>
                            <p className='w-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className='text fs-6 fw-light text-black d-flex justify-content-evenly w-100 mt-lg-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='but mt-lg-5'>
                        <button type="button" className="btn btn-warning text-light rounded-5" id='butt'>Read More</button>
                    </div>
                </div>
                <div className='about_image d-flex flex-lg-column justify-content-center fs-5 fw-bold w-50'>
                    <div className='text_inner text-light d-flex justify-content-center flex-md-wrap w-75 '>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* first content ends here */}
        {/* second content starts here */}
        <div className='services'>
            <div className='inner_services d-flex flex-lg-row justify-content-center align-items-center m-lg-3 m-1 p-lg-2 p-1'>
                <div className='inner_cont d-flex flex-lg-column justify-content-center fs-1 fw-bold w-50 flex-md-wrap m-lg-5 p-lg-5'>
                    <div className='services_content1'>
                        <p className='text-light mb-lg-0'>Our Company</p>
                        <p className='color_span mt-lg-0'>great services</p>
                    </div>
                    <div className='services_content2 fs-6 fw-light text-white d-flex justify-content-evenly w-100 mt-lg-4'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, sunt. Facilis incidunt dicta doloremque voluptas, adipisci ut.
                        </p>
                    </div>
                </div>
                <div className='inner_cont d-flex flex-lg-row justify-content-center align-items-center w-75 m-lg-3 m-1 p-lg-2 p-1'>
                    <div className='items d-flex flex-lg-column align-items-lg-center'>
                        <div className='item_1_content d-flex flex-column align-items-lg-start'>
                            <div className='img1 d-flex flex-lg-row mt-lg-2 align-items-center'>
                                <img src={item1} alt='icon 1' width={50} height={50}/>
                                <div className='icon1_content mb-lg-1'>
                                    <p className='color_span fw-bold fs-3'>
                                        Creative Works
                                    </p>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla id cum repellat libero fugiat maiores hic natus suscipit voluptatibus enim.
                                    </p>

                                </div>
                            </div>
                            <div className='img1 d-flex flex-lg-row mt-lg-2 align-items-center'>
                                <img src={item2} alt='icon 1' width={50} height={50}/>
                                <div className='icon1_content'>
                                    <p className='color_span fw-bold fs-3 '>
                                        Creative Works
                                    </p>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla id cum repellat libero fugiat maiores hic natus suscipit voluptatibus enim.
                                    </p>
                                </div>
                            </div>
                            <div className='img1 d-flex flex-lg-row mt-lg-2 align-items-center'>
                                <img src={item3} alt='icon 1' width={50} height={50}/>
                                <div className='icon1_content'>
                                    <p className='color_span fw-bold fs-3'>
                                        Creative Works
                                    </p>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla id cum repellat libero fugiat maiores hic natus suscipit voluptatibus enim.
                                    </p>
                                </div>
                            </div>
                            <div className='img1 d-flex flex-lg-row mt-lg-2 align-items-center'>
                                <img src={item4} alt='icon 1' width={50} height={50}/>
                                <div className='icon1_content'>
                                    <p className='color_span fw-bold fs-3'>
                                        Creative Works
                                    </p>
                                    <p className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla id cum repellat libero fugiat maiores hic natus suscipit voluptatibus enim.
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
        <div className='process'>
            <div className='inner_process d-flex flex-lg-row justify-content-center align-items-center m-lg-3 m-1 p-lg-2 p-1 '>
                <div className='inner_process_content d-flex flex-lg-row justify-content-center w-50 flex-md-wrap '>
                    <div className='first_img d-flex flex-lg-row justify-content-center flex-md-wrap'>
                        <div className='img2 d-flex justify-content-center align-items-center flex-column fs-5 fw-semibold'>
                            <img src={item1} alt='icon 1' width={50} height={50}/>
                            <p className='color_span '>
                                Creative
                            </p>
                            <p className='text-light fs-6 fw-normal m-lg-3'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis libero soluta accusamus ullam ipsum eum.
                            </p>
                            <button type="button" className="btn btn-warning text-light rounded-5 mt-lg-5" id='butt'>Read More</button>
                        </div>
                    </div>
                    <div className='second_img d-flex flex-lg-row justify-content-center fs-1 fw-bold flex-md-wrap p-lg-1'>
                        <div className='img3 d-flex justify-content-center align-items-center flex-column fs-5 fw-semibold'>
                            <img src={item4} alt='icon 2' width={50} height={50}/>
                            <p className='color_span '>
                                Creative
                            </p>
                            <p className='text-light fs-6 fw-normal m-lg-3 '>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis libero soluta accusamus ullam ipsum eum.
                            </p>
                            <button type="button" className="btn btn-warning text-light rounded-5 mt-lg-5" id='butt'>Read More</button>
                        </div>
                    </div>
                </div>
                <div className='inner_process_content d-flex flex-lg-row fs-1 fw-bold w-50 flex-md-wrap m-lg-5 p-lg-5'>
                    <p className='text-black display-3 fw-bold'>Welcome</p>
                    <p className='color_span display-5 fw-bold'>for Professionals</p>
                    <div className='text fs-6 fw-light text-black me-lg-1 mt-lg-2 '>
                        <p className='w-100'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='second_last d-flex flex-lg-row'>
                        <div className='img4'>
                            <img src={check_points} alt='check_points here' width={20} height={250}/>
                        </div>
                        <div className='img4_content fs-5 d-flex flex-column fw-semibold'>
                            <p className='para mb-4'>
                                Lorem ipsum dolor sitconsectetur adipiscing
                            </p>
                            <p className='para mb-4'>
                                Lorem ipsum dolor sitconsectetur adipiscing
                            </p>
                            <p className='para mb-4'>
                                Lorem ipsum dolor sitconsectetur adipiscing
                            </p>
                            <p className='para mb-4'>
                                Lorem ipsum dolor sitconsectetur adipiscing
                            </p>
                            <p className='para mb-4'>
                                Lorem ipsum dolor sitconsectetur adipiscing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* third content ends here */}
        {/* forth content starts here */}
        <div className='team'>
            <div className='inner_team d-flex flex-column justify-content-center align-items-center m-lg-5 p-lg-5'>
                <div className='inner_team_content_1 d-flex flex-lg-row'>
                    <p className='text-light fs-1 fw-bold '>Buisness &nbsp;</p>
                    <p className='color_span fs-1 fw-bold'>Team</p>
                </div>
                <div className='inner_team_content_2 d-flex justify-content-center align-items-lg-center'>
                    <p className='text-light fs-6 fw-normal '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam libero sit cum neque vel veritatis? Quos ratione voluptas soluta, est facilis delectus impedit nobis quidem ut aliquam eligendi, minus sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum nobis adipisci ad.
                    </p>
                </div>
                <div className='inner_team_images d-flex flex-lg-row flex-mb-column justify-content-center'>
                    <div class="image1">
                        <img src={image1} alt="image_1" width={200} height={250}/>
                    </div>
                    <div class="image2">
                        <img src={image2} alt="image_2" width={200} height={250}/>
                    </div>
                    <div class="image3">
                        <img src={image3} alt="image_3" width={200} height={250}/>
                    </div>
                    <div class="image4">
                        <img src={image4} alt="image_4" width={200} height={250}/>
                    </div>
                </div>
            </div>
        </div>
        {/* forth content ends here */}
        {/* fifth content starts here */}
            <div className='portfolio'>
                <div className='inner_portfolio d-flex flex-lg-column m-lg-5 p-lg-5 bg-danger'>
                    <div className='portfolio_image1 d-flex position-relative flex-lg-column w-75 bg-gradient'>
                    <div className='d-flex position-relative flex-lg-row w-75 align-items-center bg-gradient'>
                        <div className='image_1 w-50'>
                            <img src={image5} alt='image_here' width={350} height={250}/>
                        </div>
                        <div className='content_image w-50 m-lg-2 p-lg-5'>
                            <p className='text-light fs-1 fw-bold '>We have</p>
                            <p className='color_span fs-1 fw-bold'>Served</p>
                        </div>
                    </div>
                    <div className='d-flex position-relative flex-lg-row w-75 bg-gradient'>
                        <div className='image_2 w-50'>
                            <img src={image6} alt='image_here' width={200} height={200}/>
                        </div>
                        <div className='image_3 w-75'>
                            <img src={image7} alt='image_here' width={300} height={200}/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        {/* fifth content ends here */}

    </div>
  )
}
export default Home;
