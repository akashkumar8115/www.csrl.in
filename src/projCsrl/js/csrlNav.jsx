import React from "react";
import "../css/csrlNav.css";
import Logo from "../img/favicon.jpg";
import Ic from "../img/ic.png";
const csrlNav = () => {
  function sidebar() {
    document.getElementById("nav_li").style.display = "block";
  }
  
  function cross() {
      document.getElementById("nav_li").style.display = "none";
    }
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="nav_li" id="nav_li">
          <ol>
            <li>Home <a href="#" class="close" onClick={cross}></a></li>
            <li>About Us</li>
            <li>What We Do</li>
            <li>CSRL Super 30</li>
            <li>Student Achievements</li>
            <li>Award Accolades</li>
            <li>Virtual Tour</li>
            <li>Get Involed</li>
            <li>our Associates</li>
            <li>Contact Us</li>
          </ol>
        </div>

        <div className="ic">
          <span>
            <a href="">Selection Process</a> <img src={Ic} alt="Ic" />
          </span>
        </div>

        <div id="sidebar">
          <button onClick={sidebar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default csrlNav;
