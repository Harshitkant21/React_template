import React from 'react';
import logo from '../assests/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BiBold, BiLogInCircle } from 'react-icons/bi';

const Navbars = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent ">
            <div class="container-fluid">
            <a class="navbar-brand text-light fw-bold fs-4 p-lg-3 p-mb-2" href="/">
                <img src={logo} alt="" width={30} height={24}/>Agency
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav fs-6 fw-semibold">
                        <a class="nav-link active mx-3" aria-current="page" href="/">Home</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/AboutUs">About Us</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/Team">Team</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/Services">Services</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/Process">Process</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/Client">Client</a>
                        <a class="nav-link active mx-3" aria-current="page" href="/Work">Work</a>
                        <a class="nav-link active mx-3" aria-current="page" href="https://www.linkedin.com/in/harshit-kant-856b36229/">
                            <FaFacebook className="icon " />
                        </a>
                        <a class="nav-link active mx-3" aria-current="page" href="/">
                            <BsSearch className="icon" />
                        </a>
                        <a class="nav-link active mx-2" aria-current="page" href="/">
                            <BiLogInCircle className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <hr className='text-light'/>
    </>
  )
}

export default Navbars;