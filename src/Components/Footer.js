import React from 'react';
import img_footer from '../assets/logo_footer.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img_footer} alt="Footer Image" />
      </div>
      <div className="copyright">
        <p>Copyright © 2023 Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
