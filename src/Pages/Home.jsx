import Lottie from 'react-lottie';
import animationData from '.././Lottie/coder.json';
import React, { useState, useEffect } from 'react';
import "./Home.css"

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
  const message = "Hello, this is Hrishita Paul";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= message.length) {
        setText(message.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed by changing the interval
    return () => clearInterval(interval);
  }, [message]); // Added message as a dependency to useEffect

      return(
        <div className="home">
            <div className="intro_image">
            <Lottie options={defaultOptions} height={400} width={800} />
            </div>
            <div className="intro">{text}</div>
        
        </div>
      )
};