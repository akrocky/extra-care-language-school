import React from 'react';
import './Header.css'
import Nav from 'react-bootstrap/Nav'

import logo from '../../Images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const  activeStyle = {
        fontWeight: "bold",
        color: "red"
      };
    return (
        
  <Nav className="d-flex justify-content-between   header-nav ">
     
      <div className="me-5 ">
      <img  src={logo} width="300px" height="100px" alt="" />
      </div>
  
  <div className="header-menu mx-5" >
      <ul className="header-menu-list" >
          <li ><NavLink activeStyle={activeStyle} to="/home">Home</NavLink></li>
          <li ><NavLink activeStyle={activeStyle} to="/courses">Our Courses</NavLink></li>
          <li><NavLink activeStyle={activeStyle} to="/aboutus">About Us</NavLink></li>
          <li><NavLink activeStyle={activeStyle} to="/contact">Contact with Us</NavLink></li>
      </ul>
  </div>
      
</Nav>

        
    );
};

export default Header;