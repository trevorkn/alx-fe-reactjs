import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect (() => {
    
        setRecipes(recipesData)
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8"> Recipe sharing Platform</h1>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
                {recipes.map((recipe) => (
                    <div
                    key={recipe.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
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
                        </div>
                ))}
            </div>
        </div>
    );
}