import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ozlerege Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/ozlerege" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ozlerege" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ozlerege@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;