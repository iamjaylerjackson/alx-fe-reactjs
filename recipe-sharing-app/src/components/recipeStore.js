import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Pasta",
      ingredients: "Pasta, Tomato Sauce",
      instructions: "Boil pasta...",
    },
  ],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r,
      ),
    })),
}));

export default useRecipeStore;
