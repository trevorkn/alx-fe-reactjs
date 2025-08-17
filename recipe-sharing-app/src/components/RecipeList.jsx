import  useRecipeStore  from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
    const recipes = useRecipeStore((s) => s.recipes);

    return (
    <div> 
        <h2>Recipes</h2>
        {recipes.length === 0 ? (
            <p>No recipes yet. Add one below!</p>
        ):(
        recipes.map((recipe) => (
            <div key={recipe.id} style={{ marginBottom: '1rem'}}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`}>View details</Link>
            </div>
        ))
    )}
    </div>
    );
};

export default RecipeList;