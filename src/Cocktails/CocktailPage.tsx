import React, { useEffect, useState } from 'react';
import type Cocktail from './types/Cocktail';
import { Link, json, useParams } from 'react-router-dom';
import styles from './Cocktails.module.css'
import Ingredient from './types/Ingredient';

const array = [1,2,3,4,5,6,7]

function CocktailPage(): JSX.Element {

  const { cocktailID } = useParams();
  const [cocktail, setCocktail] = useState<Cocktail>();
  const [ingredients, setIngredients] = useState([]);
  // console.log(ingredients);
  

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
      .then((res) => res.json())
      .then((json) => {setIngredients(json.drinks); setCocktail(json.drinks[0])})
      // .then((json) => setCocktail(json.drinks[0]))
  }, [cocktailID]);


  // const filterIngridients = ingredients.filter((ingredient, index) => { 
  //   const blabla
  //   if (Object.keys(ingredient)  === `strIngredient${index+1}`) {
  //     return Object.values(ingredient)
  //   }
    
  // })

//   const ggg = ("cocktail?.strIngredient"+ array[0]);

//  console.log("GGG");
//  console.log(ggg);
 console.log(cocktail);

//  interface Sdfdsd {
//   [key: string]: string | null;
// }

// const sdfdsd: Sdfdsd = {
//   strIngredient1: "dfgdf",
//   strIngredient2: "sddfgfg",
//   strIngredient3: "sdsfsdg",
//   strIngredient4: "dfgdf",
//   strIngredient5: null,
// };

// function getNonNullIngredients(obj: Sdfdsd): string[] {
//   return Object.keys(obj)
//     .filter((key) => obj[key] !== null && key.startsWith('strIngredient'))
//     .map((key) => obj[key] as string);
// }

// function getNonNullIngredients(obj: Cocktail | undefined): string[] {
//   return Object.keys(obj)
//     .filter((key) => obj[key] !== null && key.startsWith('strIngredient'))
//     .map((key) => obj[key] as string);
// }

// // Пример использования:
// const result: string[] = getNonNullIngredients(cocktail);
// console.log(result);


function getObjectArray(obj: Cocktail): { key: string, value: string }[] {
  return Object.keys(obj)
    .filter((key) => obj[key] !== null && key.startsWith('strIngredient')).map((key) => ({ key, value: obj[key] as string }));
}

if (cocktail !== undefined) {
  const result: { key: string, value: string }[] = getObjectArray(cocktail);
  // Выполняйте операции с result только если cocktail не равен undefined
  console.log(result);
}

// // Пример использования:
// const result: { key: string, value: string }[] = getObjectArray(cocktail);

// console.log(result);


  return (
    <>
      <Link to="..">Назад</Link>
      <div>
        <div className=''>
          <h2>{cocktail?.strDrink}</h2>
          <p>Category: {cocktail?.strCategory} *** ID {cocktail?.idDrink}</p>
          <img className={styles.imgContainer} src={cocktail?.strDrinkThumb} alt="cocktail" />
          <h4>Type of glass: </h4>
          <p> {cocktail?.strGlass}</p>

          <h4>Receipt: </h4>
          <p>{cocktail?.strInstructions}</p>
        </div>

        <div><h2>INGREDIENTS</h2></div>
{/* <>
        {array.map((element) => 
          <img src={`https:\\www.thecocktaildb.com/images/ingredients/cocktail?.strIngredient${element}-Medium.png`} alt="cocktail" />
        )}
</> */}
        {/* {
          cocktail && Object.keys(cocktail).map((element: string) =>
            <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail[element]}-Medium.png`} alt="cocktail" />
          )
        } */}

        {/* <div>
          for (let i= 1; i < 16; ++i) {
          if (`${cocktail?.strIngredient}${i}` !== null) {
          <img src={`https:\\www.thecocktaildb.com/images/ingredients/${`cocktail?.strIngredient${i}`}-Medium.png`} alt="cocktail" />
          <h5>{`cocktail?.strMeasure${i}`}</h5>
          }
        </div> */}

        {/* <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient1}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure1}</h5>
        <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient2}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure2}</h5>
        <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient3}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure3}</h5>
        <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient4}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure4}</h5>
        <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient5}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure5}</h5>
        <img src={`https:\\www.thecocktaildb.com/images/ingredients/${cocktail?.strIngredient6}-Medium.png`} alt="cocktail" />
        <h5>{cocktail?.strMeasure6}</h5> */}
      </div>
    </>
  );
}

export default CocktailPage;