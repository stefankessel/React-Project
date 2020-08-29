import React, {Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Wrapper from '../../hoc/Wrapper';
import BuildControl from '../../components/Burger/BuildControl/BuildControl';
import Modal from '../../views/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ITEM_PRICES = {
    salad: 0.8,
    cheese: 1.3,
    meat: 1.5,
    bacon: 1.1
}


class BurgerBuilder extends Component{
    state={
        ingredients: {
            bacon: 0,
            cheese: 0,
            salad: 0,
            meat: 0
        },
        totalPrice: 3,
        purchasable : false,
        showOrderSummary: false
    }

    showOrderSummaryHandler = () => {
        this.setState({showOrderSummary: true})
    }
    closeOrderSummaryHandler = () => {
        this.setState({showOrderSummary: false})
    }
    continueOrderHandler = () => {
        alert('continue');
    }

    makePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map( objKey => {return ingredients[objKey]}).reduce( (acc, currentValue) => {return acc + currentValue});
        
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const updatedTotalPrice = this.state.totalPrice + ITEM_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
        this.makePurchasable(updatedIngredients);
    };

    removeIngredientHandler = type => {

        if(this.state.ingredients[type] > 0){
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = this.state.ingredients[type] -1;
            const updatedTotalPrice = this.state.totalPrice - ITEM_PRICES[type];
            this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
            this.makePurchasable(updatedIngredients);
        }
    }

    render(){
        const bolIngredients = {...this.state.ingredients};

        for(let key in bolIngredients){
            bolIngredients[key] = bolIngredients[key] <= 0;
        }
        return(
            <Wrapper>
                <Modal show={this.state.showOrderSummary} close ={this.closeOrderSummaryHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        close ={this.closeOrderSummaryHandler}
                        continue = {this.continueOrderHandler}
                        price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger items={this.state.ingredients}/>
                <BuildControl
                     handleAddition = {this.addIngredientHandler}
                     handleRemove = {this.removeIngredientHandler}
                     bolIngredients = {bolIngredients}
                     totalPrice = {this.state.totalPrice}
                     purchasable = {this.state.purchasable}
                     showModule = {this.showOrderSummaryHandler}
                />
            </Wrapper>
        )
    }
}

export default BurgerBuilder;