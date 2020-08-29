import React from 'react';
import classes from './MenuHamburger.module.css';

const menuHamburger =(props) => {
    return(
        <div onClick={props.toogle} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default menuHamburger;