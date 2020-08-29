import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import MenuHamburger from '../MenuHamburger/MenuHamburger';


const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <MenuHamburger toogle = {props.toogle}/>
            <nav className={classes.DesktopOnly}>
                <NavigationWrapper />
            </nav>
        </header>
    )
}

export default toolbar;