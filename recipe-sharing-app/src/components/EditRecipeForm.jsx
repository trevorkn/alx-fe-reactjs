import {useEffect, useState } from 'react'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((s) => s.updateRecipe);
    const  [title, setTitle] = useState(recipe.title)
    const [description, setDescription] = useState(recipe.description)

    // Keep local state in sync if the selected recipe changes
    useEffect(() => {
        setTitle(recipe.title)
        setDescription(recipe.description)
    }, [recipe.id, recipe.title, recipe.description])

const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    updateRecipe(recipe.id, {title, description})
}
    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Recipe description"
              />
              <button type="submit"> Save Changes</button>
            
        </form>
    )
}

export default EditRecipeForm;