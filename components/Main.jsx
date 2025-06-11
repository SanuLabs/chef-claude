import React from "react"
export default function Main(){
    const [ingredients, setNewIngredients] = React.useState([])
    const ingredientList = ingredients.map(ingredient => 
        <li key={ingredient}>{ingredient}</li>
    )

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
            <ul>

                {ingredientList}
            </ul>
        </div>
    )
}