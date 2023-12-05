import {Link } from 'react-router-dom';



const Nav=()=>{
  return (
   
      <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/bookingpage">BOOK</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
      </ul>
    </nav>
  
  );
}

export default Nav;
