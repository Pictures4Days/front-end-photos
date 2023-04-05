import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 Picture 4 Days. All Rights Reserved.</p>
          </Col>
          <Col className="text-end">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#">Terms of Use</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

