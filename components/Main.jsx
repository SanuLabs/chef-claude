import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "../ai"
export default function Main(){
    const [ingredients, setNewIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    
    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])
    async function getRecipe(){
        console.log("WORKING")
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)

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
            {ingredients.length>0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <ClaudeRecipe recipe={recipe} ref={recipeSection} />}
        </div>
    )
}