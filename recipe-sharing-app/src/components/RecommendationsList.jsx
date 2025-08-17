import { useEffect } from 'react'
import useRecipeStore from './recipeStore'

const RecommendationsList = () => {
    const recommendations = useRecipeStore(state => state.recommendations)
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations)

    // Generate recommendations whenever the components loads
    useEffect(() => {
        generateRecommendations();
    }, [])

    return(
        <div>
            <h2>Recommended for you</h2>
            {recommendations.length === 0 ? (
                <p> No recommendations yet. Add some favorites!</p>
            ): ( 
                recommendations.map(recipe => (
                    <div key ={recipe.id} style={{ marginBottom: '1rem' }}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                        </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;