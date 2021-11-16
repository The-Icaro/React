import React from 'react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className='notFound'>
      <h2>Sorry</h2>
      <p>This Page Cannot Be Found!</p>
      <Link to="/">Back To HomePage</Link>
    </div>
  )
}
