import { Link, Outlet, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from './Cocktails.module.css'
// import type Cocktail from "./types/Cocktail";

function Coctails():  JSX.Element {

  const {cocktailID} = useParams();
  const [cocktails, setCocktails] = useState();

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => res.json())
      .then((json) => setCocktails(json.drinks));
  }, []);

    console.log("ЗДЕСЬ ДРИНКС ");
    console.log((cocktails));
    
    return (
    <>
    <h2> Coctails TSX</h2>
    <div>
      <h3> Коктейлики</h3>
    {/* !cocktailID ? (  */}
      <ul className={styles.cardsList}>
        
        {cocktails.map((oneCocktail) => (
          <li className={styles.card} key={oneCocktail.idDrink.toString()}>
            <span>{oneCocktail.strDrink}</span>
            <div className={styles.imgContainer}>
              <img className={styles.img} src={oneCocktail.strDrinkThumb}  />
            </div>
            <Link to={oneCocktail.idDrink.toString()}> Look more</Link>
          </li>

        ))}
      </ul> 
     {/* )     */}
    </div>
    </>
  )

    }

export default Coctails;