import React from 'react'
import  Carousel1 from './images/Carousel1.jpg'
import  Carousel2 from './images/Carousel2.jpg'
import  Carousel3 from './images/Carousel3.png'
import "./styles/Carousel.css"
const Carousel = () => {
  return (
    <div><section id="carousel">
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active  ">
          <img src={Carousel1} className="d-block w-100 carousel-img" alt="image" />
          <div className="carousel-caption  h-50 align-items-center justify-content-center">
            <h5 className="carousel-head">Unlock Your <span className="text-green">Potential</span></h5>
            <p className="carousel-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga molestias eveniet repudiandae
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel2} className="d-block w-100 carousel-img" alt="image" />
          <div className="carousel-caption  h-50 align-items-center justify-content-center">
            <h5 className="carousel-head">Empower Your <span className="text-red">Mind</span></h5>
            <p className="carousel-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga molestias eveniet repudiandae
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel3} className="d-block w-100 carousel-img" alt="image" />
          <div className="carousel-caption h-50 align-items-center justify-content-center">
            <h5 className="carousel-head">Knowledge That <span className="text-red">Ignites</span></h5>
            <p className="carousel-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga molestias eveniet repudiandae
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section></div>
  )
}

export default Carousel