import React from 'react';
import img_footer from '../assets/logo_footer.png'

const Footer = () => {
  return (
    <footer>
      <div id="footer_img">
        
        <img  src={img_footer} alt="Footer" />
      </div>
      <div>
        <ul>
          <li>home</li>
          <li>menu</li>
          <li>book</li>
          <li>about us</li>
           
        </ul>
        </div>
      <div className="copyright">
        <p>Call us - 999 999 999</p>
        <p>Email - littlelemon@gmail.com</p>
        <br></br>
        <br></br>
        <p>Copyright © 2023 Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
