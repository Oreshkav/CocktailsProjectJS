import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CocktailsList from '../Cocktails/CocktailsList';
import CocktailPage from '../Cocktails/CocktailPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Bar Jamajka </h1>
      <nav>
        <Link to="cocktailsList">Cocktail list</Link>
      </nav>
      <br />
      <Routes >
        <Route path="cocktailsList" element={<CocktailsList />}>
        <Route path=":cocktailID" element={<CocktailPage />} />
        </Route> 
      </Routes>
    </div>
  );
}

export default App;