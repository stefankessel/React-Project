import React from 'react';
import classes from './BuildItem.module.css';

const buildItem = props => {
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less} 
                onClick={props.handleRemove}
                disabled={props.disabled}
            >                   
                Less
            </button>
            <button className={classes.More} onClick={props.handleAddition}>More</button>
        </div>
    )
}

export default buildItem;