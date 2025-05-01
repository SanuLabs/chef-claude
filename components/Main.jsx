export default function Main(){
    return(
        <div className="main">
            <form className="add-ingredient-form">
                <input aria-label="Add ingredient"
                type="text"
                placeholder="e.g. oregano"
                className="form-input"
                />
                <button className="add-ingredient-button">
                    Add ingredient
                </button>
            </form>
        </div>
    )
}