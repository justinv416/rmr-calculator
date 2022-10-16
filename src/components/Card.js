import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className='card'>
        <div className="card-info">
            <h2>{recipe.recipe.label}</h2>
            <img className="recipe-image" src={recipe.recipe.images.REGULAR.url} alt={recipe.recipe.label} />
        </div>
        <div className="card-info">
            <p><span className='recipe-label'>Calories:</span> {recipe.recipe.calories}</p>
            <p><span className='recipe-label'>Health Labels:</span> {recipe.recipe.healthLabels.map((healthLabel, index) => {
                return <span key={index}>{healthLabel} </span>
            })}</p>
            <p><span className='recipe-label'>Cuisine:</span> {recipe.recipe.cuisineType.map((cuisine, index) => {
                return <span key={index}>{cuisine}</span>
            })}</p>
            <p><span className='recipe-label'>Dishtype:</span> {recipe.recipe.dishType.map((dish, index) => {
                return <span key={index}>{dish}</span>
            })}</p>
            <p><span className='recipe-label'>Diet Labels:</span> {recipe.recipe.dietLabels.map((label, index) => {
                return <span key={index}>{label} </span>
            })}</p>
            {/* <p><span className="recipe-label">Nutrition:</span> {recipe.recipe.digest.map((nutrition, index) => {
                return (
                    <div>
                        <span key={index}>{nutrition.label}</span>
                        <span key={index}>{nutrition.total}</span>
                        <span key={index}>{nutrition.unit}</span>
                    </div>
                )
            })}</p> */}
            <a href={recipe.recipe.url} target="blank">Get Recipe</a>
        </div>        
    </div>
  )
}

export default Card