import { Link, useParams } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails =() => {
    const { id } = useParams()
    const recipeId = Number(id)

    const recipe = useRecipeStore((state) => 
    state.recipes.find((r) => r.id === recipeId)
)

      // Acess favorites and actions
     const favorites = useRecipeStore((s) => s.favorites)
     const addFavorite = useRecipeStore((s) => s.addFavorite)
     const removeFavorite = useRecipeStore((s) => s.removeFavorite)

    // Check if this recipe is already a favorite
     const isFavorite = favorites.some(f => f.id === recipeId)

if (!recipe) {
    return (
        <div>
            <p>Recipe not found.</p>
            <Link to="/">Go back</Link>
        </div>
    )
}

return (
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

        <button onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipe)}>
            {isFavorite ? 'Remove from Favorite' : 'Add to Favorites'}
        </button>

        <h3>Edit</h3>
        <EditRecipeForm recipe={recipe} />

        <div style={{marginTop: '1rem' }}>
            <DeleteRecipeButton id={recipe.id} />
        </div>

        <p style={{marginTop: '1rem'}}>
            <Link to="/">Back to list</Link>
        </p>
    </div>
)
}

export default RecipeDetails;