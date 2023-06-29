import React, { useEffect, useState } from 'react';
import type Cocktail from './types/Cocktail';
import { Link, json, useParams } from 'react-router-dom';
import styles from './Cocktails.module.css'

function CocktailPage() : JSX.Element {

  const {cocktailID} = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
    .then((res) => res.json())
    .then((json) =>  setCocktail(json.drinks[0]))
  }, [cocktailID]);

    console.log("ЗДЕСЬ 1 КОКТЕЙЛЬ ");
    console.log(cocktail);

  return (
    <>
    <Link to="..">Назад</Link>
    <div>    
      <div>
      <h2>{cocktail?.strDrink}</h2>
      <p>Category: {cocktail?.strCategory} *** ID {cocktail?.idDrink}</p>
      <img className={styles.imgContainer} src={cocktail?.strDrinkThumb} alt="cocktail" />
      <p>{cocktail?.strInstructions}</p>
      </div>

      <div><h2>INGREDIENTS</h2></div>
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient1}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient2}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient3}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient4}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient5}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient6}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient7}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient8}-Medium.png`} alt="cocktail" />
      <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient9}-Medium.png`} alt="cocktail" />


      


       
    </div>
  </>
  );
}

export default CocktailPage;