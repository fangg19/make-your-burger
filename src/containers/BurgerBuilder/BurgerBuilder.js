import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  // old method of state init
  // constructor (props){
  //   super(props)
  //   this.state = {}

  // }

  state = {
    ingredients: {
      meat: 1,
      bacon: 1,
      salad: 1,
      cheese: 2,
    },
  };
  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
