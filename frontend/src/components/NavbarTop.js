import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './css/NavbarTop.css'; 

function NavbarTop() {
  return (
    <div className="navbar-top">
      <div className="container d-flex justify-content-center"> 
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="icon" />
            <span> (+880)16-4567-7890</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span> info@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
