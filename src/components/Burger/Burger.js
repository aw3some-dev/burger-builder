import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // const transformedIngredients = Object.keys(props.ingredients)
    //     .map( ingrKey => {
    //         return [...Array(props.ingredients[ingrKey])].map( (_, i) => {
    //             return <BurgerIngredient key={ingrKey + i} type={ingrKey} />
    //         });
    //     });

    let transformedIngredients = Object.keys(props.ingredients)
        .map( ingrKey => {
            return [...Array(props.ingredients[ingrKey])].map( (_, i) => {
                return <BurgerIngredient key={ingrKey + i} type={ingrKey} />;
            });
        })
        .reduce((acc, el) => {
            return acc.concat(el);
        }, []);

    // console.log(transformedIngredients);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;