import React, { Component } from 'react';
import Button from '../../../views/Button/Button';

class OrderSummary extends Component {

    render(){
        const summary = Object.keys(this.props.ingredients)
        .map( (objKey) => {
            return( 
                <li key={objKey}>
                    <span style={{textTransform: "capitalize"}}>{objKey}</span>:  {this.props.ingredients[objKey]}
                </li>
            )
        });
        return(
            <div>
            <h2>Your Order</h2>
            <p>Total Price: <strong>{this.props.price.toFixed(2)}</strong></p>
            <ul>
                {summary}
            </ul>
            <Button clicked={this.props.continue} btnType="Success">Continue</Button>
            <Button clicked={this.props.close} btnType="Danger">Cancel</Button>
        </div>
        )
    }

}

export default OrderSummary;