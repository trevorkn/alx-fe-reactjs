import  useRecipeStore  from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
    const recipes = useRecipeStore((s) => s.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore ((s) => s.searchTerm)

    //which list to show
    const listToShow = searchTerm ? filteredRecipes : recipes
    
    return (
    <div> 
        <h2>Recipes</h2>
        {listToShow.length === 0 ? (
            <p>No recipes yet. Add one below!</p>
        ):(
        listToShow.map((recipe) => (
            <div key={recipe.id} className="recipe-card" style={{ marginBottom: '1rem'}}>
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