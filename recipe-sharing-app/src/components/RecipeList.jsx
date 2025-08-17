import  useRecipeStore  from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
    const recipes = useRecipeStore((s) => s.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore ((s) => s.searchTerm)
    const favorites = useRecipeStore((s) => s.favorites);
    const addFavorite = useRecipeStore((s) => s.addFavorite);
    const removeFavorite = useRecipeStore((s) => s.removeFavorite);

    //which list to show
    const listToShow = searchTerm ? filteredRecipes : recipes
    
    return (
    <div> 
        <h2>Recipes</h2>
        {listToShow.length === 0 ? (
            <p>No recipes yet. Add one below!</p>
        ):(
        listToShow.map((recipe) => {
            const  isFavorite = favorites.some(f => f.id === recipe.id);

            return (
            <div key={recipe.id} className="recipe-card" style={{ marginBottom: '1rem'}}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <Link to={`/recipes/${recipe.id}`}>View details</Link>

                {/**Add/Remove Favorites button */}
                <button
                onClick={() => {
                    isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe);
                }}
                style={{ marginLeft: '1rem'}}
                >{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
           
            </div>
        );
    })
    )}
    </div>
    );
};

export default RecipeList;