import React from 'react'

const RecipeForm = (props) => {
  return (
    <div className="form-container">
        <form className="input-form" action="" onSubmit={props.handleFetchRecipes}>
            <label htmlFor="ingredient-input">Enter a ingredient</label>
            <input
                className='input' 
                id="ingredient-input" 
                type="text"
                value={props.inputIngredient}
                onChange={props.handleIngredientInput} 
            />
            <label htmlFor="calories-input">Enter Calories</label>
            <input
                className='input' 
                id="calories-input" 
                type="text"
                value={props.inputCalories}
                onChange={props.handleCaloriesInput} 
            />
            <button type='submit' className='button'>Get Recipes</button>
        </form>
    </div>
  )
}

export default RecipeForm