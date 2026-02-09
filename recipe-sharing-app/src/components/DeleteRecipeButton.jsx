import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Are you sure? This action cannot be undone.")) {
      deleteRecipe(recipeId);
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        backgroundColor: "#e53e3e",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
