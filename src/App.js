import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h2>About Me</h2>
              <p>
                Hello! I'm a web developer with a passion for building interactive
                and responsive websites. I specialize in ReactJS and have experience
                with other technologies like Node.js, Express, and MongoDB.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center">Projects</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>
                    A description of my project goes here. This could be a website, an app, etc.
                  </Card.Text>
                  <Button variant="primary" href="https://github.com/my-github">GitHub Repo</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more project cards here */}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2>Contact Me</h2>
          <p>Email: myemail@example.com</p>
        </Container>
      </section>
    </div>
  );
}

export default App;
