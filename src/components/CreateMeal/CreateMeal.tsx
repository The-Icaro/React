import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import "./createMeal.css"
import { handlePost } from './Post/handlePost'

function CreateMeal() {

  const navigate = useNavigate()

  const [ name, setName ] = useState('')
  const [ drink, setDrink ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ area, setArea ] = useState('')
  const [ instructions, setInstructions ] = useState('')
  const [ thumb, setThumb ] = useState('')
  const [ tags, setTags ] = useState('')
  const [ youtube, setYoutube ] = useState('')

  const [ ingredients, setIngredients ] = useState<any>([])
  const [ measures, setMeasures ] = useState<any>([])

  const [ countIng, setCountIng ] = useState<any>([1])
  const [ countMea, setCountMea ] = useState<any>([1])

  const [ renderFrame, setRenderFrame ] = useState(0)

  const handleAddIngAndMea = () => {

    if(countIng.length < 20) {
      const tempValueIng = countIng.length + 1
      const tempValueMea = countMea.length + 1

      const addToIng = [...countIng, tempValueIng]
      const addToMea = [...countMea, tempValueMea]

      setCountIng(addToIng)
      setCountMea(addToMea)

      setRenderFrame(Math.random)
    }

  }

  const handleSubmit = (event : any) => {
    event.preventDefault()

    const mealBasic = {
      name,
      drink,
      category,
      area,
      instructions,
      thumb,
      tags,
      youtube
    }

    const meal = handlePost(mealBasic, ingredients, measures)
    
    fetch('https://topiplusapp.herokuapp.com/meals', {
      method: 'POST',
      headers: { "Content-type" : "application/json" },
      body: JSON.stringify(meal)
    }).then(() => navigate("/"))

    setName('')
    setDrink('')
    setCategory('')
    setArea('')
    setInstructions('')
    setThumb('')
    setTags('')
    setYoutube('')
  }

  return (
    <div className="createRecipeWrapper">
      
      <form onSubmit={handleSubmit}>
        <div className="boxStyle">
          <h3>Create a New Recipe</h3>
          <label>Meal Name</label>
          <input 
            type="text" 
            required
            value={name}
            onChange={(event) => {setName(event.target.value)}}
          />

          <label>Is Good with a Drink?</label>
          <input 
            type="text"
            value={drink}
            onChange={(event) => {setDrink(event.target.value)}}
          />

          <label>Categories</label>
          <input 
            type="text"
            required
            value={category}
            onChange={(event) => {setCategory(event.target.value)}}
          />

          <label>Tags</label>
          <input 
            type="text"
            value={tags}
            onChange={(event) => {setTags(event.target.value)}}
          />

          <label>What Area is From?</label>
          <input 
            type="text"
            required
            value={area}
            onChange={(event) => {setArea(event.target.value)}}
          />
        </div>

        <div className="boxStyle">
          <h3>How to Do</h3>

          <div className="ingredientsAndMeasuresInputs">
            <label>Ingredients and Measures</label>
              {countIng.map((value: any) => {
                return (         
                <div key={renderFrame + value}>
                  <input 
                    type="text" 
                    required 
                    placeholder={`Ingredient ${value}`}
                    value={ingredients[value]}
                    onChange={(event) => {
                      const addToIng = [...ingredients]
                      addToIng[value] = event.target.value
                      setIngredients(addToIng)
                    }}
                  /> 
                   &gt;  
                  <input 
                    type="text" 
                    required 
                    placeholder={`Measure ${value}`}
                    value={measures[value]}
                    onChange={(event) => {
                      const addToMea = [...measures]
                      addToMea[value] = event.target.value
                      setMeasures(addToMea)
                    }}
                  />
                </div>
              )})}
              <button  type="button" onClick={handleAddIngAndMea} formNoValidate><p>+</p></button>
          </div>
          {console.log(measures)}
          <label>Instructions</label>
          <textarea
            required
            value={instructions}
            onChange={(event) => {setInstructions(event.target.value)}}
          />
        </div>

        <div className="boxStyle">
          <h3>Plus</h3>
          <label>Meal Thumb</label>
          <input
            type="text"
            required
            value={thumb}
            onChange={(event) => {setThumb(event.target.value)}}
          />

          <label>Youtube Video</label>
          <input
            type="url"
            value={youtube}
            onChange={(event) => {setYoutube(event.target.value)}}
          />
        </div>

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default CreateMeal
