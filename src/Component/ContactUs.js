import axios from 'axios';
import React, { useState } from "react";
import Navbars from './Navbar';
import Footer from './footer';
import "../ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { caretCircleDown, user } from 'fontawesome';
const ContactUs = () => {
  const validateForm = () => {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters = /^[a-zA-Z\s]*$/;
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (n == "" || n == null) {
      document.getElementById('nameLabel').innerHTML = ('Please enter your name');
      document.getElementById('name').style.borderColor = "red";
      return false;
    }

    if (!n.match(onlyLetters)) {
      document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
      document.getElementById('name').style.borderColor = "red";
      return false;
    }

    if (e == "" || e == null) {
      document.getElementById('emailLabel').innerHTML = ('Please enter your email');
      document.getElementById('email').style.borderColor = "red";
      return false;
    }

    if (!e.match(onlyEmail)) {
      document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
      document.getElementById('email').style.borderColor = "red";
      return false;
    }

    if (s == "" || s == null) {
      document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
      document.getElementById('subject').style.borderColor = "red";
      return false;
    }

    if (!s.match(onlyLetters)) {
      document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
      document.getElementById('subject').style.borderColor = "red";
      return false;
    }

    if (m == "" || m == null) {
      document.getElementById('messageLabel').innerHTML = ('Please enter your message');
      document.getElementById('message').style.borderColor = "red";
      return false;
    }

    else {
      return true;
    }

  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        uname: name,
        email: email,
        subject: subject,
        message: message,
      };
      console.log(userData);
      const response = await axios.post("http://localhost:8000/contactus", userData);
      if (response.status === 200) {
        let d = response.data;
        console.log(d.msg);
        console.log(response.status);
        navigate("/");
      }
    } catch (error) {
      console.log("Error during Contacting us:", error.message);
    }

  }
  return (
    <>
      <div className='bg-black'>
        <Navbars />
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2 className="form-title m-4 m-lg-5 p-3 p-lg-3">Get in Touch</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form id="contact-form" name="myForm" className="form" onSubmit={(e) => { e.preventDefault(); if (validateForm()) { handleContact(e); } }} role="form">
              <div className="form-group">
                <label className="form-label" id="nameLabel" htmlFor="name"></label>
                <input type="text" className="form-control input2" id="name" name="name" placeholder="Your name" tabIndex="1" onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="form-group">
                <label className="form-label" id="emailLabel" htmlFor="email"></label>
                <input type="email" className="form-control input2" id="email" name="email" placeholder="Your Email" tabIndex="2" onChange={(e) => setEmail(e.target.value)}/>
              </div>

              <div className="form-group">
                <label className="form-label" id="subjectLabel" htmlFor="subject"></label>
                <input type="text" className="form-control input2" id="subject" name="subject" placeholder="Subject" tabIndex="3" onChange={(e) => setSubject(e.target.value)}/>
              </div>

              <div className="form-group">
                <label className="form-label" id="messageLabel" htmlFor="message"></label>
                <textarea rows="4" cols="60" name="message" className="form-control " id="message" placeholder="Your message" tabIndex="4" onChange={(e) => setMessage(e.target.value)}/>
              </div>

              <div className="text-center m-4 m-lg-4">
                <button type="submit" className="btn btn-outline-dark btn-large col-lg-12 col-12"> Send Message </button>
              </div>
            </form>
            <div className='back1 text-center'>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} bounce className='icon-black' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
export default ContactUs;