import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Cocktails.module.css'
import { CocktailBest } from './types/Cocktail';

function CocktailPage(): JSX.Element {
  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState<CocktailBest | undefined>(undefined);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [drinkIngredientsMeasure, setDrinkIngredientsMeasure] = useState<string[]>([]);

  // console.log("ingredients****");
  // console.log(ingredients);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
    )
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks?.[0];

        // console.log("🚀 drink:", drink);
        if (drink) {
          const drinkIngredients: string[] = [];
          const drinkIngredientsMeasure: string[] = [];

          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const IngredientsMeasure = drink[`strMeasure${i}`];
            if (ingredient) {
              drinkIngredients.push(ingredient);
              drinkIngredientsMeasure.push(IngredientsMeasure);
            }
          }
          setIngredients(drinkIngredients);
          setDrinkIngredientsMeasure(drinkIngredientsMeasure);
          setCocktail(drink);
        }
      })
      .catch((error) => {
        console.error("Error fetching cocktail:", error);
      });
  }, [cocktailID]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="..">Back</Link>
      <div>
        <div className={styles.cocktailTitle}>
          <h2>{cocktail.strDrink}</h2>
          <p>
            Category: {cocktail.strCategory} *** ID {cocktail.idDrink}
          </p>
          <img
            className={styles.imgCard}
            src={cocktail.strDrinkThumb}
            alt="cocktail"
          />
        </div>
        <div className={styles.description}>
          Type of glass: {cocktail.strGlass}
        </div>
        <div className={styles.receipt} >
          <h3>RECIEPT: </h3>
          <p>{cocktail.strInstructions}</p>
        </div>

        <div>
          {/* <h2>INGREDIENTS</h2> */}
          <div className={styles.ingredientsClass}>
            {ingredients.map((ingredient, index) => (
              <div key={index}>
                <img
                  className={styles.imgCardIngredient}
                  src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                  alt={ingredient}
                />
                <p>{ingredient}</p>
              </div>
            ))}
          </div>
          <div className={styles.ingredientsClass}>
            {drinkIngredientsMeasure.map((measure, index2) => (
              <div className={styles.measureClass} key={index2}>
                <span>{`${measure}`}</span>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default CocktailPage;
