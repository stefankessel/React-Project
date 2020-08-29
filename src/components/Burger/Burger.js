import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let burgerItems = Object.keys(props.items)
                        .map( item => [...Array(props.items[item])]
                        .map( (_, index) => {return <BurgerIngredient type={item} key={item + index}/>}))
                        .reduce( (acc, currentValue) => {return acc.concat(currentValue)},[]);
    if(burgerItems.length === 0){
        burgerItems = <p>Enter Burger Ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {burgerItems}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger
