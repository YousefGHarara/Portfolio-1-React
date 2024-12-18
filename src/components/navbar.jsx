import "../assets/navbar.css";

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="nav-content">
          <h1 className="logo">yousef & harara</h1>

          <ul>
            <li><Link to="/#">Home</Link></li>
            <li><Link to="/#skills">Skills</Link></li>
            <li><Link to="/#education">Education</Link></li>
            <li><Link to="/#rating">Rating</Link></li>

            {/* <li><a href="#">Home</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#education">Education</a></li>
            <li><a href="/#rating">Rating</a></li> */}
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
