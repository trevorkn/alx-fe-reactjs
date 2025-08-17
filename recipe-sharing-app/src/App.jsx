import { Routes, Route, Link, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import './App.css'
function App() {
//using BrowserRouter for routing
  return (
    <>
    <h1>Recipe Sharing App</h1>
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link>
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
    <Route path="/recipes/:id" element={<RecipeDetails />} />
    <Route path="*" element={<Navigate to="/" replace /> } />
    </Routes>
 
    </>
  )
}

export default App
