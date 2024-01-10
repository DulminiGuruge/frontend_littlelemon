import React from 'react';
import img_menu from '../assets/menu.jpg';
import img_people from '../assets/people.jpg';
import img_booking from '../assets/book.jpg';
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();


  function handleClickMenu() {
    navigate("/menu");
  }
  function handleClickBooking() {
    navigate("/bookingpage");
  }
  function handleClickAbout() {
    navigate("/about");
  }


  return (
    <main>
      <div className="banner-section">
        <p>Welcome to Little Lemon!<br /><br />Experience a fusion of Italian, Greek, and Turkish cuisine with a modern twist at Little Lemon.</p>
        <button>Call Us - 999 999 999</button>
      </div>

      <section>
        <article>
          <h2>Menu</h2>
          <img src={img_menu} alt="menu" />
          <p style={{ textAlign: 'center' }}>Explore the heart of the Mediterranean at Little Lemon. Our Chef curates a menu inspired by <strong>Italy, Greece, and Turkey</strong>.<br /> From pasta to kebabs, indulge in a perfect blend of heritage and innovation.</p>
          <button onClick={handleClickMenu}>View Menu</button>
         
        </article>

        <article>
          <h2>Booking</h2>
          <img src={img_people} alt="booking" />
          <p style={{ textAlign: 'center' }}>Are you excited to explore the world of Mediterranean cuisine at Little Lemon? <br /><br />Don't wait any longer, book your table online or give us a call to secure your spot in our cozy haven of culinary delights.</p>
          <button onClick={handleClickBooking}>Reserve Now</button>
        </article>

        <article>
          <h2>Hours</h2>
          <img src={img_booking} alt="Hours" />
          <p style={{ textAlign: 'center' }}>We are open from - <br /><br />Monday to Friday from 11.00 am to 10.00 pm<br /> Weekends from 10.00 am to 12.00 pm.<br />In Chicago, Illinois</p>
          <button onClick={handleClickAbout}>Read More</button>
        </article>
      </section>
    </main>
  );
};

export default Main;
