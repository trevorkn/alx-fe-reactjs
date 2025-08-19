import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css"
import Header from './components/Header'
import Footer from './components/Header'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import NotFoundPage from './pages/NotFoundPage'


                /** Layout pieces */


      /**  Pages */




export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container main">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
