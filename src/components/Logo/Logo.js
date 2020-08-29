import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = () => (
    <div className={classes.Logo}>
        <img alt='Logo' src={burgerLogo}/>
    </div>
)

export default logo;