import React, { FormEvent, useEffect, useState } from 'react';
import { Link, Outlet, useParams} from 'react-router-dom';
import Ingredient from './types/Ingredient';
import styles from './Cocktails.module.css';
import Cocktail from './types/Cocktail';

function Ingredients() {

  const { cocktailID } = useParams();

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

  return (
    <>
    { !cocktailID ?  (
      <div>
      <form onSubmit={handleSubmit}>
        <select name="ingredients" id="ingredintSelect" onChange={(event) => setIngredientChoice(event.target.value)}>
          {ingredient.map((eachIngredient) =>
          (<option value={eachIngredient.strIngredient1} key={eachIngredient.strIngredient1}>{eachIngredient.strIngredient1} </option>
          ))}
        </select>

        <button type="submit">Filter</button>
      </form>

        <ul className={styles.cardsList}>
          {cocktails.map((eachCocktail) => (
            <li className={styles.card} key={eachCocktail.idDrink.toString()}>
              {/* <span>{eachCocktail.strDrink}</span> */}
              <div className={styles.imgContainer}>
                <img className={styles.img} src={eachCocktail.strDrinkThumb} />
              </div>
              <Link to={eachCocktail.idDrink.toString()}>{eachCocktail.strDrink}</Link>
            </li>
          ))}
        </ul>
        </div>
        ) : <Outlet />}
    </>
  )
}

export default Ingredients;