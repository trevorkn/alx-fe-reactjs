import React, { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/recipe/:id' element={<RecipeDetail />} />
      </Routes>
     </Router>
    </>
  )
}

export default App
