import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className='card'>
        <h2>{recipe.recipe.label}</h2>
        <img src={recipe.recipe.images.REGULAR.url} alt="" />
        <p>Calories: {recipe.recipe.calories}</p>
        <p>Health Labels: {recipe.recipe.healthLabels.map((healthLabel, index) => {
            return <span key={index}>{healthLabel}</span>
        })}</p>
        <p>Cuisine: {recipe.recipe.cuisineType.map((cuisine, index) => {
            return <span key={index}>{cuisine}</span>
        })}</p>
        <p>Dishtype: {recipe.recipe.dishType.map((dish, index) => {
            return <span key={index}>{dish}</span>
        })}</p>
        <p>Diet Labels: {recipe.recipe.dietLabels.map((label, index) => {
            return <span key={index}>{label}</span>
        })}</p>
        <p>Nutrition: {recipe.recipe.digest.map((nutrition, index) => {
            return (
                <div>
                    <span key={index}>{nutrition.label}</span>
                    <span key={index}>{nutrition.total}</span>
                    <span key={index}>{nutrition.unit}</span>
                </div>
            )
        })}</p>
        <a href={recipe.recipe.url} target="blank">Get Reciipe</a>
    </div>
  )
}

export default Card