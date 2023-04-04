import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p>&copy; {new Date().getFullYear()} Pictures 4 Days || All Rights Reserved.</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
