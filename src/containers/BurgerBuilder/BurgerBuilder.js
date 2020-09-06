import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
  // old method of state init
  // constructor (props){
  //   super(props)
  //   this.state = {}

  // }

  state = {
    ingredients: {
      meat: 0,
      bacon: 0,
      salad: 0,
      cheese: 0,
    },
  };

  addIngredientHandler = () => {};

  removeIngredientHandler = () => {};

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
