import React, { useState } from "react";

export default function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients, separated by commas";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: instructions.split("\n")[0] || "New Recipe",
      image: "/placeholder.jpg", // You can replace with actual image upload later
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: instructions.split("\n").map((step) => step.trim()),
    };

    onAdd(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto mb-6 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <div>
        <label className="block mb-1 font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={3}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Instructions (one per line)</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={5}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}
