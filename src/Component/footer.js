import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <footer class="bg-black text-center text-white">
                <div class="text-center p-3 p-lg-3">
                    Copyright © 2023. |  Devloped by HARSHIT KANT
                    <div className='back'>
                        <a href="/">
                            <FontAwesomeIcon icon={faHouse} bounce className="icon-white"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer;
