import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: support@securepage.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="footer-section">
            <h4>Security Information</h4>
            <p>We prioritize your privacy and security. All transactions are protected by SSL encryption.</p>
            <p>For more details, visit our <a href="/security-policy">Security Policy</a> page.</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <p><a href="/terms-of-service">Terms of Service</a></p>
            <p><a href="/privacy-policy">Privacy Policy</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SecurePage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
