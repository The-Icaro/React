import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './mealsInfo.css'
import YoutubePlayer from '../../utils/YoutubePlayer'

function MealsInfo() {

  const { id } = useParams()
  const { data, isLoading, errorLog } = useFetch(`http://localhost:5000/meals/${id}`)
  const meal : any = data

  const navigate = useNavigate()

  const handleDelete = () => {
    fetch(`https://topiplusapp.herokuapp.com/meals/${id}`, {
      method: "DELETE"
    }).then(() => navigate("/"))
  }

  return (
    <div className="mealsInfoWrapper">
      {errorLog && <div>{errorLog}</div>}
      {isLoading && <div>Loading Meals</div>}
      {meal && (
        <div className="mealsInfoWrapper">

            {meal.strYoutube && (
              <div className="mealsInfoYoutube boxStyle">
                <h3>Watch On Youtube!</h3>
                <div className="youtubePlayerWrapper">
                  <YoutubePlayer url={meal.strYoutube}/>
                </div>
              </div>
            )}
          
            <div className="mealsMainInfo boxStyle">
              <h2>{meal.strMeal}</h2>
              <span>{meal.strCategory} , {meal.strArea}</span>
              {meal.strTags && <p className="mealsInfoTags">Tags : {meal.strTags}</p>}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>

            <div className="tableWrapper boxStyle">
              <table>
                <tr>
                  <th>Ingredients</th>
                  <th>Measures</th>
                </tr>

                <tr>
                  <td>{meal.objIngredientsAndMeasure.strIngredient1}</td>
                  <td>{meal.objIngredientsAndMeasure.strMeasure1}</td>
                </tr>

                {meal.objIngredientsAndMeasure.strIngredient2 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient2}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure2}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient3 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient3}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure3}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient4 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient4}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure4}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient5 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient5}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure5}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient6 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient6}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure6}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient7 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient7}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure7}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient8 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient8}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure8}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient9 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient9}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure9}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient10 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient10}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure10}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient11 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient11}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure11}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient12 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient12}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure12}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient13 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient13}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure13}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient14 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient14}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure14}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient15 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient15}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure15}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient16 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient16}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure16}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient17 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient17}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure17}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient18 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient18}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure18}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient19 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient19}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure19}</td></tr>
                )}
                {meal.objIngredientsAndMeasure.strIngredient20 && (
                  <tr><td>{meal.objIngredientsAndMeasure.strIngredient20}</td> 
                  <td>{meal.objIngredientsAndMeasure.strMeasure20}</td></tr>
                )}
              </table>
            </div>
            
            <div className="mealsInfoInstructions boxStyle">
              <h3>Instructions</h3>
              <p>{meal.strInstructions}</p>
            </div>

            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
      )}
    </div>
  )
}

export default MealsInfo
