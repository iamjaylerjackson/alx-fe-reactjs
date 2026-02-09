import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  // Handle empty state FIRST
  if (recipes.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#718096" }}>
        <p>No recipes yet. Add your first recipe!</p>
        <Link
          to="/add"
          style={{
            display: "inline-block",
            marginTop: "10px",
            color: "#3182ce",
            textDecoration: "underline",
          }}
        >
          Add Recipe
        </Link>
      </div>
    );
  }

  // Render recipes list
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ color: "#2d3748", marginBottom: "20px" }}>Recipes</h2>

      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            margin: "15px 0",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", color: "#2d3748" }}>
            {recipe.title}
          </h3>

          <p style={{ margin: "0 0 12px 0", color: "#4a5568" }}>
            {recipe.description ||
              recipe.ingredients?.substring(0, 100) + "..."}
          </p>

          <Link
            to={`/recipes/${recipe.id}`}
            style={{
              color: "#3182ce",
              textDecoration: "none",
              fontWeight: "500",
              display: "inline-block",
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
