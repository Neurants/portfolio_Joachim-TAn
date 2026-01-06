import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Image, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import profilePic from './assets/images/profile_pic.jpg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

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
      <div>
        {/* Navbar */}
        <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Contact Link */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Dark/Light Mode Toggle */}
        <div className="theme-toggle">
          <Button onClick={toggleDarkMode} variant={darkMode ? 'secondary' : 'primary'}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>

        {/* Router's Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <section id="about" className="py-5">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <h2 className="about-header">About Me</h2>
                        <p>
                          Hello! I'm Joachim Emanuelle M. Tan, new to web development and excited to share my projects with you.
                          I have a passion for creating beautiful and functional web applications. In my portfolio, you'll find a selection of my work,
                          showcasing my skills in HTML, CSS, JavaScript, and React. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about what I do!
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

                {/* Skills Section */}
                <section id="skills" className="py-5">
                  <Container>
                    <h2 className="mb-4">My Skills</h2>
                    <Row>
                      <Col md={4}>
                        <Card className="mb-4">
                          <Card.Body>
                            <Card.Title>HTML</Card.Title>
                            <Card.Text>Semantic HTML5, accessibility, and SEO-friendly page structure.</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="mb-4">
                          <Card.Body>
                            <Card.Title>CSS</Card.Title>
                            <Card.Text>Responsive layouts, Flexbox, Grid, and Bootstrap styling.</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="mb-4">
                          <Card.Body>
                            <Card.Title>JavaScript</Card.Title>
                            <Card.Text>ES6 syntax, DOM manipulation, and interactive UI logic.</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="mb-4">
                          <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>Functional components, hooks, props, and state management.</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <section id="contact" className="py-5">
                <Container>
                  <h2>Contact Me</h2>
                  <p>Email: <a href="mailto:jmtan3@student.apc.edu.ph">jmtan3@student.apc.edu.ph</a></p>
                  <p>Mobile: 09177060254</p>
                </Container>
              </section>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
