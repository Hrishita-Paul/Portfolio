import Lottie from 'react-lottie';
import animationData from '.././Lottie/about.json';
import "./About.css"
export default function About(){
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
        <Lottie options={defaultOptions} height={500} width={800} />
      </div>
      <div className="card about-card">
  <div className="card-body">
    <h5 className="card-title about-heading">About me</h5><br/>
    <p className="card-text about-text">I am a 3rd year student pursuing B.Tech in Computer Science and Engineering at NIT Silchar. I love problem-solving and I have keen interest in Frontend Web Development. I am an avid learner and adapt well to a collaborative working culture.</p>
    <h5 className="card-title about-heading">Skills:</h5><br/>
    <p className="card-text about-text">Languages: C++, JavaScript, Java<br/>
    Tools: Git, Github<br/>
    Coursework: DBMS, OS, DSA, OOP</p>
    
  </div>
</div>

       
    </div>
      )
}