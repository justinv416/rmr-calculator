import React from 'react'

const Card = ({recipe}) => {
  return (
    <div>{recipe.recipe.label}</div>
  )
}

export default Card