import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {


  const navigate = useNavigate()

  const handleSearch = (event : any) => {
    if(event.key === 'Enter'){
      if(event.target.value === "") {
        navigate("/")
      } else {
        navigate("/meals/search/" + event.target.value)
      }   
    }
  }

  return (
    <div className="navbarWrapper">
      <Link to="/"><img src="https://i2.wp.com/topi.io/wp-content/uploads/2018/06/cropped-03-topi-logo-preferencial-branca-1-2.png?fit=1000%2C355&ssl=1" alt="TopiLogo" /></Link>
      <div className="navbarLinksWrapper">
        <Link to="/">Home</Link>
        <input 
          type="text" 
          onKeyPress={handleSearch} 
          />
      </div>
    </div>
  )
}

export default NavBar