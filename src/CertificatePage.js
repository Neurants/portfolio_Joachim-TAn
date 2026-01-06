import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Image, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import profilePic from './assets/images/profile_pic.jpg';
import './App.css';
import CertificatePage from './CertificatePage';

function App() {
  // State to toggle between dark mode and light mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // useEffect runs when darkMode changes, updates the body class accordingly
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Navigation bar at the top */}
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Links to different pages using React Router */}
            <Nav.Link as={Link} to="/">About Me</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/certificate">Certificate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Button to toggle dark/light mode */}
      <div className="theme-toggle">
        <Button onClick={toggleDarkMode} variant={darkMode ? 'secondary' : 'primary'}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>

      {/* Routes define which component to show based on URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<CertificatePage />} />
      </Routes>
    </Router>
  );
}

// Home page section with About Me content
function Home() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="about-header">About Me</h2>
            <p className="about-text">
              Hello! I'm Joachim Emanuelle M. Tan, new to web development and excited to share my projects with you. 
              I have a passion for creating beautiful and functional web applications. Feel free to explore my projects and get in touch!
            </p>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image src={profilePic} roundedCircle alt="My Profile" fluid className="profile-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Skills page section
function Skills() {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="mb-4">My Skills</h2>
        <Row>
          {/* Cards showing different skills */}
          <Col md={4}><Card className="mb-4"><Card.Body><Card.Title>HTML</Card.Title><Card.Text>Semantic HTML5, accessibility, and SEO-friendly page structure.</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card className="mb-4"><Card.Body><Card.Title>CSS</Card.Title><Card.Text>Responsive layouts, Flexbox, Grid, and Bootstrap styling.</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card className="mb-4"><Card.Body><Card.Title>JavaScript</Card.Title><Card.Text>ES6 syntax, DOM manipulation, and interactive UI logic.</Card.Text></Card.Body></Card></Col>
          <Col md={4}><Card className="mb-4"><Card.Body><Card.Title>React</Card.Title><Card.Text>Functional components, hooks, props, and state management.</Card.Text></Card.Body></Card></Col>
        </Row>
      </Container>
    </section>
  );
}

// Hobbies page section
function Hobbies() {
  return (
    <section id="hobbies" className="py-5">
      <Container>
        <h2 className="mb-4">My Hobbies</h2>
        <Row>
          <Col md={6}><Card className="mb-4"><Card.Body><Card.Title>Anime Lover</Card.Title><Card.Text>I enjoy watching anime in my spare time.</Card.Text></Card.Body></Card></Col>
          <Col md={6}><Card className="mb-4"><Card.Body><Card.Title>Gaming</Card.Title><Card.Text>I love exploring video games like RPGs and FPS games.</Card.Text></Card.Body></Card></Col>
        </Row>
      </Container>
    </section>
  );
}

// Contact page section
function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:jmtan3@student.apc.edu.ph">jmtan3@student.apc.edu.ph</a></p>
        <p>Mobile: <a href="tel:+1234567890">09177060254</a></p>
      </Container>
    </section>
  );
}

export default App;
