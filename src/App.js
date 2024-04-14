import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Projects from "./Pages/Projects.jsx"
import Experience from "./Pages/Experience.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Navbar.Brand >
         Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: 'white' }}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" style={{ color: 'white' }}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" style={{ color: 'white' }}>
              Experience
            </Nav.Link>
  
  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/experience" element={<Experience />} />
       
      </Routes>
    </Router>
     <Footer/>
       
    </div>
  );
}

export default App;
