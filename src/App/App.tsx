import './App.css';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CocktailsList from '../Cocktails/CocktailsList';
import CocktailPage from '../Cocktails/CocktailPage';
import Ingredients from '../Ingredients/Ingredients';
import HomePage from '../HomePage/HomePage';
import TelegramBot from '../TelegramBot/TelegramBot';

function App(): JSX.Element {

  const [pageName, setPageName] = useState(true);

  function setPageNameFunction() {
    setPageName(prev => !prev)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Bar Jamajka </h1>
        <nav>
          <Link to="cocktailsList" onClick={setPageNameFunction} className='coktaillist'>Cocktails list</Link>
          <br />
          <Link to="ingredients" onClick={setPageNameFunction} className='coktaillist'>Cocktails by ingredients</Link>
        </nav>
      </div>
      <br />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path={pageName? "cocktailsList" : "ingredients"} 
               element={pageName ? <CocktailsList /> : <Ingredients /> }>
          <Route path=":cocktailID" element={<CocktailPage />} >
            <Route path=":telegramBot" element={<TelegramBot />} />
          </Route>
        </Route>
        {/* <Route path="ingredients" element={<Ingredients />} >
          <Route path=":cocktailID" element={<CocktailPage />} >
            <Route path=":telegramBot" element={<TelegramBot />} />
          </Route>
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;