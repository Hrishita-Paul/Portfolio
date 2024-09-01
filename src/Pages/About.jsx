import {useEffect} from "react";
import Lottie from 'react-lottie';
import animationData from '.././Lottie/about.json';
// import  image from "../Components/my-image.JPG";
import "./About.css"
export default function About(){
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      return(
    <div className="about">
      <div className="about-image">
        <Lottie options={defaultOptions} height={350} width={500} />
      </div>
      <div className="card about-card">
        {/* <img src={image} className="my-image" width={200} height={200}/> */}
  <div className="card-body">
    <h5 className="card-title about-heading">About me</h5><br/>
    <p className="card-text about-text">I am a 4th year student pursuing B.Tech in Computer Science and Engineering at NIT Silchar. I love problem-solving and I have keen interest in Frontend Web Development. I am an avid learner and adapt well to a collaborative working culture.</p>
    <h5 className="card-title about-heading">Skills:</h5><br/>
    <p className="card-text about-text">Languages: C++, JavaScript, Java<br/>
    Technologies: React.js, Node.js, Express, Spring Boot, Bootstrap<br/>
    Tools: Git, GitHub, MySQL,MongoDB, Swagger, Actuator, Prometheus<br/>
    Coursework: DBMS, OS, DSA, OOP</p>
    
  </div>
</div>

       
    </div>
      )
}