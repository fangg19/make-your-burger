import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

export class BurgerBuilder extends Component {
  render() {
    return (
      <Auxiliary>
        <Burger />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
