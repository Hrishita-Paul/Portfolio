import React,{useEffect} from "react";
import "./Projects.css";
import projects from "./Projects.json";
import centralLibraryImage from "../assets/Central Library_Image.jpeg";
import wasteManagementImage from "../assets/Waste Management_image.jpeg";
import atmImage from "../assets/ATM.avif";

const projectImages = {
  1: centralLibraryImage,
  2: wasteManagementImage,
  3: atmImage,
};
const Projects = () => {
useEffect(()=>{
window.scrollTo(0,0);
},[]);



  return (
    <>
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={projectImages[project.id]}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-user">{project.user}</p>
                <p className="project-tech">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <p className="project-link">
                  <a href={project.link} target="_blank" rel="noreferrer">Project Link</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
