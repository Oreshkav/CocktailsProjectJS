import React, { FormEvent, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Ingredient from './types/Ingredient';
import styles from './Cocktails.module.css';
import Cocktail from './types/Cocktail';

function Ingredients() {

  const [ingredient, setIngredient] = useState<Ingredient[]>([]);
  const [ingredientChoice, setIngredientChoice] = useState<string>('');
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((res) => res.json())
      .then((json) => setIngredient(json.drinks));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setFlag(!flag);
  }

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientChoice}`)
      .then((res) => res.json())
      .then((json) => setCocktails(json.drinks));
  }, [flag]);

  // console.log("INGREDIENTS LIST ");
  // console.log(ingredient);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select name="ingredients" id="ingredintSelect" onChange={(event) => setIngredientChoice(event.target.value)}>
          {ingredient.map((eachIngredient) =>
          (<option value={eachIngredient.strIngredient1} key={eachIngredient.strIngredient1}>{eachIngredient.strIngredient1} </option>
          ))}
        </select>

        <button type="submit">Filter</button>
      </form>

      <div>
        {/* !cocktailID ? (  */}
        <ul className={styles.cardsList}>
          {cocktails.map((eachCocktail) => (
            <li className={styles.card} key={eachCocktail.idDrink.toString()}>
              <span>{eachCocktail.strDrink}</span>
              <div className={styles.imgContainer}>
                <img className={styles.img} src={eachCocktail.strDrinkThumb} />
              </div>
              <Link to={eachCocktail.idDrink.toString()}> Look more</Link>
            </li>
          ))}
        </ul>

      </div>
      <Outlet />

      {/* <br /><br />
      <div className={styles.cardsList}>
        {ingredient.map((eachIngredient) => (<div className={styles.card}> {eachIngredient.strIngredient1}
          <div className={styles.imgContainer}>
            <img src={`https:\\www.thecocktaildb.com/images/ingredients/${eachIngredient.strIngredient1}-Medium.png`} alt="ingredient img" />
          </div>
        </div>
        ))}
        <Outlet />
      </div>
      <Outlet /> */}
    </>
  )
}

export default Ingredients;