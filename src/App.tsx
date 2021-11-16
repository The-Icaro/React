import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MealsInfo from './components/MealsInfo/MealsInfo';
import { NotFound } from './components/NotFound/NotFound';
import CreateMeal from './components/CreateMeal/CreateMeal';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>

            <Route path="/" element={<Home/>}/>

            <Route path="/meals/:id" element={<MealsInfo/>}/>

            <Route path="/create" element={<CreateMeal/>}/>

            <Route path="/meals/search/:searched" element={<Home/>}/>

            <Route path="*" element={<NotFound/>}/>

          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
