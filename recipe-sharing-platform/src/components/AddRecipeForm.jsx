import React, { useState } from "react";

export default function AddRecipeForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      errors.ingredients = "Enter at least 2 ingredients, separated by commas";
    if (!steps.trim()) errors.steps = "Steps are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.split("\n")[0] || "New Recipe",
      image: "/placeholder.jpg", // Replace with uploaded image later
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split("\n").map((step) => step.trim()),
    };

    onAdd(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto mb-6 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      {/* Title */}
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

      {/* Ingredients */}
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

      {/* Steps */}
      <div>
        <label className="block mb-1 font-semibold">Steps (one per line)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows={5}
          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}
