import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId),
  );

  if (!recipe) return <div style={{ padding: "20px" }}>Recipe not found</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "15px",
          color: "#3182ce",
        }}
      >
        ← Back to Recipes
      </Link>

      <h1 style={{ color: "#2d3748" }}>{recipe.title}</h1>

      <div
        style={{
          background: "#f7fafc",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#4a5568" }}>Ingredients</h3>
        <p>{recipe.ingredients}</p>
      </div>

      <div
        style={{
          background: "#f7fafc",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "15px",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0", color: "#4a5568" }}>Instructions</h3>
        <p>{recipe.instructions}</p>
      </div>

      <div style={{ marginTop: "25px", display: "flex", gap: "10px" }}>
        <Link to={`/recipes/${recipeId}/edit`}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#3182ce",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Edit Recipe
          </button>
        </Link>
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    </div>
  );
};

export default RecipeDetails;
