import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Lottie/arrow.json';
import exp from './Experience.json';
import './Experience.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Experience = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience">
      <p className="experience-heading">Work Experience</p>
      <div className="arrow">
        <Lottie options={defaultOptions} height={60} width={100} />
      </div>
      <div style={{ overflowX: 'hidden' }}>
        <div className="ParentDiv">
          <div className="bottomParent">
            <div className="BottomDiv">
              <Swiper
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
                className="mySwiper"
              >
                {exp.map((e) => (
                  <SwiperSlide className="swiperclass" key={e.id}>
                    <img src={e.src} alt={e.id} className="image" />
                    <h1 className="h1">{e.name}</h1>
                    <div className="EventText">{e.text}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
