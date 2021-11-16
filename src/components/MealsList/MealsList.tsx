import React from 'react'
import { Link } from 'react-router-dom'
import './mealsList.css'

function MealsList(props : any) {

  const meals = props.data

  return (
    <div className="mealsListWrapper">
      { meals.map((meal : any) => (
        <div className="mealsPreviewWrapper" key={meal.idMeal}>
          <Link to={`/meals/${meal.idMeal}`} >
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <span>{meal.strCategory} , {meal.strArea}</span>
            <h2>{meal.strMeal}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MealsList
