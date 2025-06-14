import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
export default function Main(){
    const [ingredients, setNewIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }
   
    
    function addIngredient(formData){
        const newingredient = formData.get("ingredient")
     if(newingredient!=""){setNewIngredients(prevIngredients => [...prevIngredients, newingredient])}
    }
    return(
        <div className="main">
            <form className="add-ingredient-form" action={addIngredient}>
                <input aria-label="Add ingredient"
                type="text"
                placeholder="e.g. oregano"
                className="form-input"
                name="ingredient"
                />
                <button className="add-ingredient-button">
                    Add ingredient
                </button>
            </form> 
            {ingredients.length>0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />}
            {recipeShown && <ClaudeRecipe/>}
        </div>
    )
}