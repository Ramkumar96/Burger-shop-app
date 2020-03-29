import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {


    
    //118
    //keys method extract keys of given object and turns into array
    //Object.keys(props.ingredients) out put will be arrays of keys,["salad", "bacon", "cheese", "meat"]
    //console.log( Object.keys(props.ingredients))
    //igKey is individual keys of array Ex: salad , bacon , cheese
    //Array(Length of given ingredients) creating an array(props.ingredients[igKey])
    //console.log(igKey)
    //console.log(...Array(props.ingredients[igKey]))

   

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey =>{   
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please Start adding ingredients !</p>
    }
    //console.log(transformedIngredients)
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>

    );
};

export default burger;