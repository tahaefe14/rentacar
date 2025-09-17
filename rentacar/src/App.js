import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Foto from './components/Foto';
import Cart from './components/Cart';
import Bizkimiz from './components/Bizkimiz';
import Hakkimizda from './components/Hakkimizda';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
  
      <Navbar/>
      <Foto/>
      <Bizkimiz/>
      <Cart/>
      <BookingForm/>
      <Hakkimizda/>
      <Footer/>
      
    </div>
  );
}

export default App;
