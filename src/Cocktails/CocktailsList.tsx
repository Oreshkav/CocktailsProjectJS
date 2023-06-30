import { Link, Outlet, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from './Cocktails.module.css'
import type Cocktail from "./types/Cocktail";

function Coctails():  JSX.Element {

  const {cocktailID} = useParams();

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((res) => res.json())
      .then((json) => setCocktails(json.drinks));
  }, []);
    
    return (
    !cocktailID ? ( 
      <ul className={styles.cardsList}>

        {cocktails.map((eachCocktail) => (
          <li className={styles.card} key={eachCocktail.idDrink.toString()}>
            {/* <span>{eachCocktail.strDrink}</span> */}
            <div className={styles.imgContainer}>
              <img className={styles.img} src={eachCocktail.strDrinkThumb}  />
            </div>
            <Link to={eachCocktail.idDrink.toString()}>{eachCocktail.strDrink}</Link>
          </li>
        ))}
        
      </ul> 
    )  : <Outlet />  
  );
    }

export default Coctails;