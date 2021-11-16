import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MealsList from './components/MealsList/MealsList'
import useFetch from './hooks/useFetch'

function Home() {

  var { searched } = useParams()

  
  if(!searched)
    searched = ''


  const { data , isLoading, errorLog } = useFetch('https://topiplusapp.herokuapp.com/meals?search=' + searched)
  const meals : any = data

  return (
    <div>
      {errorLog && <div>{errorLog}</div>}
      {isLoading && <div>Loading Meals</div>}
      {meals && <MealsList data={meals}/>}
      {meals && meals.length === 0 && 
      <h3>Sorry, Can't Find Anything with "{searched}"</h3>}
    </div>
  )
}

export default Home
