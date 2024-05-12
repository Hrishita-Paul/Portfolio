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
      <p className="experience-heading">My Experience at GDSC, NITS</p>

      <div id="carousel carouselExample" className="carousel slide">
        <div className="carousel-inner ">
          {images.map((item, index) => (
            <div className={index === activeIndex ? "carousel-item active" : "carousel-item"} key={item.id}>
              <img src={item.imageAddress} className="d-block experience_image" width={500} height={800} alt={item.title} />
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

      <div class="card experience-card" >
        <div className="card-body">
         
        <p className="card-text experience-text">My experience at GDSC, NIT Silchar as a core member of the esteemed club was incredibly enriching. Throughout my time there, I had the opportunity to immerse myself in various activities that not only helped me grow personally and professionally but also allowed me to contribute meaningfully to the community.<br /><br />One of the most fulfilling aspects was mentoring juniors. Guiding them through their journey, sharing insights, and witnessing their growth was immensely rewarding. It not only solidified my understanding of concepts but also honed my communication and leadership skills.<br /><br />
            As a web developer, I found ample opportunities to expand my skills. Working on projects, both independently and collaboratively, challenged me to think critically and creatively. Each project was a learning experience, pushing me to explore new technologies and approaches.<br /><br />Teaching in technical workshops was another highlight of my time at GDSC. Being able to share my knowledge with others, seeing their enthusiasm and eagerness to learn, was truly gratifying. It helped me deepen my understanding of the subjects while also fostering a sense of community within the organization.<br /><br />Moreover, being involved in anchoring important ceremonies added another dimension to my experience. It allowed me to enhance my public speaking abilities and develop confidence in presenting myself in front of large audiences.<br /><br />Overall, my journey with GDSC, NIT Silchar was a dynamic blend of learning, mentoring, collaborating, and leading. It not only shaped me into a better web developer but also instilled in me a sense of responsibility and passion for contributing to the tech community.<br />
          </p>


          
        </div>
      </div>
    </div>
  );
}
