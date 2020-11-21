import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const controls = [
    { label: '🥓 Bacon', type: 'bacon' },
    { label: '🧀 Cheese', type: 'cheese' },
    { label: '🥩 Meat', type: 'meat' },
    { label: '🍃 Salad', type: 'salad' },
  ];

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          ingredientWasAdded={() => props.addIngredient(ctrl.type)}
          ingredientWasRemoved={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
      </button>
    </div>
  );
};

export default BuildControls;
