import React from "react";
import "../../styles/navbar.css";
import Image from '../../images/2f0efc75ba294ffa94e62f70a2a4836f.png'

function Navbar() {
  return (
    <div className="navbar">
        <li className="img"><img src={Image} alt="logo" /></li>
      {/* <li>searchbar goes here</li> */}
      <div className="navbar-right">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#newsfeed">Newsfeed</a>
        </li>
        <li>
          <a href="#timeline">Timeline</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
