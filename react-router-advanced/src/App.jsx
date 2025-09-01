import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProtectedRoute from './components/protectedRoute';

export default function App() {

  return (
    <Router>
      <div>
       <nav className='p-4 bg-gray-200 flex gap-4'>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post</Link>
        <Link to="/login">Login</Link>
       </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Protected and nested */}
        <Route path="/profile/*" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </Router>
  );
}


