import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add your first recipe!</p>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            margin: "10px 0",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
