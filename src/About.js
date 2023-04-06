import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import camImage from './img/cam.png';
import malikImage from './img/malik.png';
import slavaImage from './img/slava.jpeg';
import GitHubLogo from './img/Octocat.png';
import LinkedInLogo from './img/LinkedIn.png';

function AboutUs() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <Container>
        <Row>
          <Col md>
            <Card className="mb-3">
              <Card.Img variant="top" src={camImage} />
              <Card.Body>
                <Card.Title>Cam Griffin</Card.Title>
                <Card.Text>
                  Cam is a software developer with experience in building web applications using various front-end and back-end technologies. He is passionate about creating clean, efficient code and enjoys working on projects that challenge him to learn new skills.
                </Card.Text>
                <a href="https://github.com/CodrCam" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub" width="32" height="32" /></a>
                <a href="https://www.linkedin.com/in/codrcam/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn" width="32" height="32" /></a>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="mb-3">
              <Card.Img variant="top" src={malikImage} />
              <Card.Body>
                <Card.Title>Malik Torres</Card.Title>
                <Card.Text>
                  Malik is a full-stack developer with a strong background in building scalable web applications. He enjoys working on complex projects that require creative problem-solving and collaboration with other team members.
                </Card.Text>
                <a href="https://github.com/MalikTorres" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub" width="32" height="32" /></a>
                <a href="https://www.linkedin.com/in/maliksadikitorres/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn" width="32" height="32" /></a>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card className="mb-3">
              <Card.Img variant="top" src={slavaImage} />
              <Card.Body>
                <Card.Title>Slava Makeev</Card.Title>
                <Card.Text>
                  Slava is a software engineer with a focus on building scalable, high-performance applications. He is passionate about learning new technologies and enjoys working on projects that challenge him to think outside the box.
                </Card.Text>
                <a href="https://github.com/S-Makeev" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub" width="32" height="32" /></a>
                <a href="https://www.linkedin.com/in/slava-makeev/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn" width="32" height="32" /></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
