import React, { useState } from 'react';
import images from "../Components/images.json";
import "./Experience.css"

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="experience">
      <p className="expeience-heading">My Experience at GDSC, NITS</p>
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div className={index === activeIndex ? "carousel-item active" : "carousel-item"} key={item.id}>
            <img src={item.imageAddress} className="d-block experience_image" width={500} height={500} alt={item.title} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev experience_image" type="button" onClick={handlePrev} data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden experience_image">Previous</span>
      </button>
      <button className="carousel-control-next experience_image" type="button" onClick={handleNext} data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon " aria-hidden="true"></span>
        <span className="visually-hidden ">Next</span>
      </button>
    </div>
    </div>
  );
}
