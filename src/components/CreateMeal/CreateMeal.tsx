import React, { useState } from 'react'
import "./createMeal.css"

function CreateMeal() {

  const [ name, setName ] = useState('')
  const [ drink, setDrink ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ area, setArea ] = useState('')
  const [ instructions, setInstructions ] = useState('')
  const [ thumb, setThumb ] = useState('')
  const [ tags, setTags ] = useState('')
  const [ youtube, setYoutube ] = useState('')

  const [ countIng, setCountIng ] = useState<any>([0])
  const [ countMea, setCountMea ] = useState<any>([0])

  const [ renderFrame, setRenderFrame ] = useState(0)

  const handleAddIngAndMea = () => {
    const addToIng = countIng.length + 1
    const addToMea = countMea.length + 1

    setCountIng(addToIng)
    setCountMea(addToMea)

    setRenderFrame(Math.random)

  }

  const handleSubmit = (event : any) => {
    event.preventDefault()
    console.log("Submited")

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
                <div key={renderFrame}>
                  <input type="text" required placeholder={`Ingredient ${value}`}/> -&gt; <input type="text" required placeholder={`Measure ${value}`}/>
                </div>
              )})}
              <button onClick={handleAddIngAndMea}  formNoValidate ></button>
          </div>

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
            type="url"
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
