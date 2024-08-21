import Lottie from 'react-lottie';
import animationData from '.././Lottie/coder.json';
import React, { useState, useEffect } from 'react';
import "./Home.css";
import image from "../assets/myPic.jpeg";

export default function Home(){
    const defaultOptions= {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      
      const [text, setText] = useState('');
  const message = "Welcome visitor, this is Hrishita Paul";

  useEffect(() => {
    window.scrollTo(0,0);
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [message]); 

      return(
        <div className="home">
            <div className="intro_image">
            <Lottie options={defaultOptions} height={400} width={800} />
            </div>
            <div className="intro">{text}</div>
            <div className="fun-fact">
              <img className="fun-fact-image" src={image} alt="myPic" height="300" width="200"/>
              <div className="text">
              <h1 className="fun-fact-heading">Fun Fact about me</h1>
              <p className="fun-fact-text">I love exploring new places and cultures. I've traveled to 24 states in India and have also visited Europe and the USA.</p>
              </div>
              </div>
        
        </div>
      )
};