import useRecipeStore from './recipeStore'

const FavoritesList = () => {
    //Map favorite IDs to actual recipe objects
    const favorites = useRecipeStore(state => state.favorites);
        


    return (
        <div>
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
                <p> No favorites yet.</p>
            ) : (
                favorites.map(recipe => (
                    <div key ={recipe.id} style={{ marginBottom: '1rem'}}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;