import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{display: 'flex',justifyContent: 'center', padding: '10px', backgroundColor: '#282c34'}}>
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            <Link to="/Home.jsx" style={{color: "white"}}>Home.1</Link>
            <Link to="/About.jsx" style={{color: "white"}}>About</Link>
            <Link to="/Contact.jsx" style={{color: "white"}}>Contact</Link>
            <Link to="/Services.jsx" style={{color: "white"}}>Services</Link>
            </nav>
            
    );
}