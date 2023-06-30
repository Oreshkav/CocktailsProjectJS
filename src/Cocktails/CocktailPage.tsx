import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Cocktails.module.css'
import { CocktailBest } from './types/Cocktail';

function CocktailPage(): JSX.Element {
  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState<CocktailBest | undefined>(undefined);
  const [ingredients, setIngredients] = useState<string[]>([]);
  console.log("ingredients****");
  console.log(ingredients);
  

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`
    )
      .then((res) => res.json())
      .then((json) => {
        const drink = json.drinks?.[0];

        console.log("🚀  drink:", drink);
        if (drink) {
          const drinkIngredients: string[] = [];

          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            if (ingredient) {
              drinkIngredients.push(ingredient);
            }
          }
          setIngredients(drinkIngredients);
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
        <div className="">
          <h2>{cocktail.strDrink}</h2>
          <p>
            Category: {cocktail.strCategory} *** ID {cocktail.idDrink}
          </p>
          <img
            className={styles.imgCard}
            src={cocktail.strDrinkThumb}
            alt="cocktail"
          />
          <h4>Type of glass: </h4>
          <p>{cocktail.strGlass}</p>

          <h4>Receipt: </h4>
          <p>{cocktail.strInstructions}</p>
        </div>

        <div>
          <h2>INGREDIENTS</h2>
        </div>

        <div className="ingredients">
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                alt={ingredient}
              />
              <h5>{ingredient}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CocktailPage;
