import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../hoc/Wrapper';

class Modal extends Component{
    shouldComponentUpdate(nextProp, nextState){
        return nextProp.show !== this.props.show || nextProp.children !== this.props.children
    }
    render(){
        return(
            <Wrapper>
                <Backdrop show={this.props.show} close={this.props.close}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}
export default Modal;