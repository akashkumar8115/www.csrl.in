// Carousel.js

import React from "react";
import "../css/Carousel.css";
// import "../css/Carousel0.css";
import Img1 from "../img/cr1.jpg";
import Img2 from "../img/cr2.jpg";
import Img3 from "../img/cr3.png";
import Img4 from "../img/cr4.png";
import Img5 from "../img/cr5.png";
import Img6 from "../img/cr6.png";
function Carousel() {
  let slideIndex = 0;

 // Assuming slideIndex is defined somewhere in the scope or passed as a parameter
// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";

//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// showSlides();


  return (
    <div>
      <div className="body">
        <div class="container">
          <div class="carousel">
            <div class="carousel__face"></div>
            <div class="carousel__face"></div>
            <div class="carousel__face"></div>
            <div class="carousel__face"></div>
            <div class="carousel__face"></div>
            <div class="carousel__face"></div>
          </div>
        </div>
      </div>

      {/* laptop view */}

      {/* <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={Img1}  alt="Img1"/>
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={Img2} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Img3} />
          <div className="text">Caption Three</div>
        </div>
        
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Img4} />
          <div className="text">Caption Three</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Img5} />
          <div className="text">Caption Three</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={Img6} />
          <div className="text">Caption Three</div>
        </div>
      </div>

      <div className="dut">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}
    </div>
  );
}

export default Carousel;
