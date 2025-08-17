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