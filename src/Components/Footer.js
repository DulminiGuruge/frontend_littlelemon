import React from 'react';
import img_footer from '../assets/logo_footer.png';
import {Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      
      <div id="footer_img">
        
        <img  src={img_footer} alt="Footer" />
      </div>
      <div className="navlinks">
        <h4>Navigation</h4>
        <br></br>
         <p></p>
         <p><Link to="/">Home</Link></p>
         <p><Link to="/menu">Menu</Link></p>
         <p><Link to="/bookingpage">Book</Link></p>
         <p> <Link to="/about">About</Link></p>
         
         
         
      </div>
     
      <div className="copyright">
        <div><p>Phone - </p>
        <p> 999 999 999</p></div>
        <br></br>
        <div><p>Email - </p>
        <p>Dul@gmail.com</p>
        </div>
        <br></br>
        <br></br>
  
        
        <div><p>Copyright © 2023 Little Lemon</p></div>
        
      </div>
    </footer>
  );
};

export default Footer;
