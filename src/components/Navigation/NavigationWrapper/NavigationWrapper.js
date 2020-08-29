import React from 'react';
import classes from './NavigationWrapper.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationWrapper = () => {
    return(
        <ul className={classes.NavigationWrapper}>
            <NavigationItem link='/' active>Burger Builder</NavigationItem>
            <NavigationItem link='/'>Checkout</NavigationItem>
        </ul>
    )
}

export default navigationWrapper;