import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import useRecipeStore from "./components/recipeStore";

function App() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
