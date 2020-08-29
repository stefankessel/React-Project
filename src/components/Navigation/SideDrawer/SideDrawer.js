import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import Backdrop from '../../../views/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Wrapper>
            <Backdrop 
                show ={props.open}
                close={props.close}
            />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationWrapper />
                </nav>
            </div>
        </Wrapper>
    )
}
export default sideDrawer;