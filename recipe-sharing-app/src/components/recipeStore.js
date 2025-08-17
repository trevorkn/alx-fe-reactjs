import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

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
            get().filtereRecipes()
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
}));

export default useRecipeStore;