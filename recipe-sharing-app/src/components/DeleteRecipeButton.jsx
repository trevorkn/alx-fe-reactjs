import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const DeleteRecipeButton = ({ id }) => {
    const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
    const navigate = useNavigate() 

    const handleDelete = () => {
        deleteRecipe(id)
        navigate('/')
    }

     return <button onClick={handleDelete}>Delete Recipe</button>
}

export default DeleteRecipeButton;