import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CocktailsList from '../Cocktails/CocktailsList';
import CocktailPage from '../Cocktails/CocktailPage';
import Ingredients from '../Ingredients/Ingredients';
import HomePage from '../HomePage/HomePage';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="header">
        <h1>Bar Jamajka </h1>
        <nav>
          <Link to="cocktailsList" className='coktaillist'>Cocktails list</Link>
          <br />
          <Link to="ingredients" className='coktaillist'>Ingredients</Link>
        </nav>
      </div>
      <br />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="cocktailsList" element={<CocktailsList />}>
          <Route path=":cocktailID" element={<CocktailPage />} />
        </Route>
        <Route path="ingredients" element={<Ingredients />} >
          <Route path=":cocktailID" element={<CocktailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;