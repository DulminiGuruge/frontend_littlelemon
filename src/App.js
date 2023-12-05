import './App.css'
import { Routes,Route } from "react-router-dom";

import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import MenuPage from './Pages/MenuPage';
import AboutPage from './Pages/AboutPage';



export default function App() {
  return(
   
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path='/bookingpage' element={<BookingPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>


        </Routes>
    
)
}

