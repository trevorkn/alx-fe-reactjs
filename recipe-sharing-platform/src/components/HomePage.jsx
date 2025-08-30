import React, { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

      {/* Add Recipe Toggle Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {showForm ? "Close Form" : "Add New Recipe"}
        </button>
      </div>

      {/* AddRecipeForm */}
      {showForm && (
        <AddRecipeForm onAdd={addRecipe} />
      )}

      {/* Recipes Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
