import React from 'react';
import classes from './BuildControl.module.css';
import BuildItem from './BuildItem/BuildItem'

const buildControl = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'}
    ]
    return (
        <div className={classes.BuildControl}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controls.map( ctr => (
                <BuildItem 
                    key={ctr.label} 
                    label={ctr.label}
                    handleAddition={ () => props.handleAddition(ctr.type)}
                    handleRemove = { () => props.handleRemove(ctr.type)}
                    disabled = {props.bolIngredients[ctr.type]}
                />))}
            <button 
                className={classes.OrderButton}
                disabled ={!props.purchasable}
                onClick={() => props.showModule()}
            >Order Now</button>
        </div>
    )
}

export default buildControl;