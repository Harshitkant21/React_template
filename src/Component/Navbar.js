import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assests/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import {BiLogInCircle} from 'react-icons/bi';

const Navbars = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-transperant">
          <Container>
            <div className='row w-100 mt-2'>
                <div className='col-lg-1'>
                    <Navbar.Brand href="#home" className='fs-4 fw-bold text-light' id='brand'><img src={logo} alt="logo here" style={{width:40,height:30}}/>Agency</Navbar.Brand>
                </div>
                <div className='col-lg-11 ps-auto d-flex justify-content-end'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' id="tog" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto gap-lg-3 text-light">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/AboutUs">About Us</Nav.Link>
                            <Nav.Link href="/Team">Team</Nav.Link>
                            <Nav.Link href="/Services">Services</Nav.Link>
                            <Nav.Link href="/Process">Process</Nav.Link>
                            <Nav.Link href="/Client">Client</Nav.Link>
                            <Nav.Link href="/Work">Work</Nav.Link>
                            <Nav.Link to="/" target="_blank">
                                <FaFacebook className="icon " />
                            </Nav.Link>
                            <Nav.Link href="/">
                                <BsSearch className="icon" />
                            </Nav.Link>
                            <Nav.Link href="/">
                                <BiLogInCircle className="icon" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
          </Container>
      </Navbar><hr className='text-white'/>
    </>
  )
}

export default Navbars;