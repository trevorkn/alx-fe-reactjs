import './App.css'
import React from 'react';
import {
   BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';

function App() {

  return (
    <>
    
      <Router>
    <Navbar />  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  )
}

export default App;
