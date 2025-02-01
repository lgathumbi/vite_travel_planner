import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Follow Us</h3>

      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="https://www.instagram.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.tiktok.com" className="footer__social-link" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-tiktok"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
