import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav, Button, Image, Card } from 'react-bootstrap';
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

  // Add all your PDF certificates here (place PDFs in public folder)
  const certificates = [
    {
      name: 'How to Train Your Brain For Happiness',
      file: '/CertificateOfCompletion_HowToTrainYourBrainForHappiness.pdf',
    },
    {
      name: 'Learning Python 2021',
      file: '/CertificateOfCompletion_LearningPython2021.pdf',
    },
    {
      name: 'Computer Science Principles Digital Information',
      file: '/CertificateOfCompletion_ComputerSciencePrinciplesDigitalInformation.pdf',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Dark/Light Mode Toggle */}
      <div className="theme-toggle">
        <Button onClick={toggleDarkMode} variant={darkMode ? 'secondary' : 'primary'}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>

      {/* About Me */}
      <section id="about" className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="about-header">About Me</h2>
              <p>
                Hello! I'm Joachim Emanuelle M. Tan, new to web development and excited to share my projects with you. 
                I have a passion for creating beautiful and functional web applications. In my portfolio, you'll find a selection of my work, showcasing my skills in HTML, CSS, JavaScript, and React.
                Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about what I do!
              </p>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image
                  src={profilePic}
                  roundedCircle
                  alt="My Profile"
                  fluid
                  className="profile-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills */}
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

      {/* Hobbies */}
      <section id="hobbies" className="py-5">
        <Container>
          <h2 className="mb-4">My Hobbies</h2>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Anime Lover</Card.Title>
                  <Card.Text>I enjoy watching anime in my spare time. It's a great way to relax and explore different stories.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Gaming</Card.Title>
                  <Card.Text>I love exploring video games like RPGs, action-adventure, and FPS games such as Valorant.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5">
        <Container>
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:jmtan3@student.apc.edu.ph">jmtan3@student.apc.edu.ph</a></p>
          <p>Mobile: 09177060254</p>
        </Container>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-5">
        <Container>
          <h2 className="mb-4">Certificates</h2>
          <Row>
            {certificates.map((cert, index) => (
              <Col md={12} key={index} className="mb-4">
                <h5>{cert.name}</h5>
                <iframe
                  src={cert.file}
                  title={cert.name}
                  width="100%"
                  height="600px"
                  style={{ border: '1px solid #ccc' }}
                ></iframe>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
