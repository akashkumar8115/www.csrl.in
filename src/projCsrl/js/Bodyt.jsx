import React, { useState } from "react";
import { SliderData } from "./SliderData.jsx";
import "../css/Bodyt.css";
function Bodyt({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="bodyt_">
        <div>
          <h1>Our Projects</h1>
          <span className="br_our">
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{" "}
          </span>
          <br />
          <a class="lk" href="/Home/what_we_do_project_csrl">
            View All
          </a>
        </div> 
      
        <br />
        <section className="slider">
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
                id="slide"
              >
                {index === current && (
                  <img src={slide.image} alt="travel image" className="image" />
                )}
              </div>
            );
          })}
          <br />
        </section>
        <div>
          <button className="left-arrow" onClick={prevSlide}>
            left
          </button>
          <button className="right-arrow" onClick={nextSlide}>
            Right
          </button>
        </div>
      </div>
    </>
  );
}

export default Bodyt;
