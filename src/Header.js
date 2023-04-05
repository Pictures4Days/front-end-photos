import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import octocatLogo from './img/Octocat.png';
import Logo from './img/Logo.png';

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={Logo}
              width="150"
              height="75"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="https://github.com/CodrCam">
                <img src={octocatLogo} alt="GitHub" width="40" height="40" />
                <div>Cam's GitHub</div>
              </Nav.Link>
              <Nav.Link href="https://github.com/MalikTorres">
                <img src={octocatLogo} alt="GitHub" width="40" height="40" />
                <div>Malik's GitHub</div>
              </Nav.Link>
              <Nav.Link href="https://github.com/S-Makeev">
                <img src={octocatLogo} alt="GitHub" width="40" height="40" />
                <div>Slava's GitHub</div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
