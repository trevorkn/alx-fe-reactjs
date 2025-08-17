import { Routes, Route, Link, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

import './App.css'
function App() {
//using BrowserRouter for routing
  return (
    <>
    <h1>Recipe Sharing App</h1>
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/favorites" style={{marginRight: '1rem'}}>favorites</Link>
      <Link to="/recommendations">Recommendations</Link>
      <SearchBar />
    </nav>

    <Routes>
      <Route 
        path="/"
        element={
          <>
          <RecipeList />
          <AddRecipeForm />
          </>
        }
        />
        {/* recipe details page*/}
    <Route path="/recipes/:id" element={<RecipeDetails />} />
    <Route path="*" element={<Navigate to="/" replace /> } />


    {/*Favorite page */}
    <Route path="/favorites" element={<FavoritesList />} />

     {/* Recommendations page */}
     <Route path="/recommendations" element={<RecommendationsList />} />
    </Routes>
 
    </>
  )
}

export default App
