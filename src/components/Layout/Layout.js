import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';

class Layout extends Component{
    state={
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false})
    }
    toogleSideDrawerHandler = () => {
        this.setState( (prevState) => ({showSideDrawer: !prevState.showSideDrawer}))
    }
    render(){
        return(
            <Wrapper>
                <Toolbar toogle = {this.toogleSideDrawerHandler}/>
                <SideDrawer 
                    close={this.closeSideDrawerHandler}
                    open = {this.state.showSideDrawer}
                />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
} 

Layout.propTypes = {
    showSideDrawer: PropTypes.bool
}

export default Layout;