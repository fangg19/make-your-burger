import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Excellent Choice !</h3>
      <p>Your delicious burger topped with the following:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout ?</p>
    </Auxiliary>
  );
};

export default OrderSummary;
