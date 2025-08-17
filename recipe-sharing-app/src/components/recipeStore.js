import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],
    favorites: [],
    recommendations: [],

    addRecipe: (newRecipe) => { 
        set((state) => ({ recipes: [...state.recipes, newRecipe] }))
        get().filterRecipes()
    },

        updateRecipe: (id, updates) =>
            set((state) => ({
                recipes: state.recipes.map((r) => r.id === id ? { ...r, ...updates } : r),
            }), false, 'updateRecipe'),

            deleteRecipe: (id) => {
                set((state) => ({
                    recipes: state.recipes.filter((r) => r.id !== id),
                }))
                get().filterRecipes()
            },
                
        setRecipes: (recipes) => {
            set({ recipes })
            get().filterRecipes()
        },

        setSearchTerm: (term) => {
            set({ searchTerm: term })
            get().filterRecipes()
        },
        
        filterRecipes: () => {
            const { recipes, searchTerm } = get()
            set({
                filteredRecipes:  recipes.filter((recipe) =>
                    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            ),
            })
        },

        addFavorite: (recipe) => {
            const { favorites } = get()
            if(!favorites.find(f => f.id === recipe.id)) {
                set({ favorites: [...favorites, recipe] })
            }
        },

        removeFavorite: (id) => {
            set((state) => ({
                favorites: state.favorites.filter(recipe => recipe.id !== id)
            }))
        },

           // ...Recommendations
           // simple mock recommendation: pick some recipe from favorites randomly
        generateRecommendations: () => {
            const { recipes, favorites } = get();
            const recommended = recipes.filter(recipe => 
                favorites.some(f => f.id === recipe.id) && Math.random() > 0.5
            );
            set({recommendations: recommended})
        },
}));

export default useRecipeStore;