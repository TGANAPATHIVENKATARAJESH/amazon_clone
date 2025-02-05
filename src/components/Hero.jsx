import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css"; // Include custom CSS for text overlay

const Hero = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hero-image-container">
            <img
              src="hero_image.jpg"
              className="d-block w-100 hero-img"
              alt="Hero 1"
            />
            <div className="carousel-caption">
              <h1>Electronics</h1>
              <p>Experience the future of mobile technology. Sleek design, powerful features, and unbeatable performance.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-container">
            <img
              src="box6_image.jpg"
              className="d-block w-100 hero-img"
              alt="Hero 2"
            />
            <div className="carousel-caption">
              <h1></h1>
              <p>Another great product description.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-container">
            <img
              src="box7_image.jpg"
              className="d-block w-100 hero-img"
              alt="Hero 3"
            />
            <div className="carousel-caption">
              <h1>Product Name</h1>
              <p>Something special about this product!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Hero;
