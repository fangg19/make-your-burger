import React from 'react';
// import Icon from '../../../assets/icons/hamburger.png';
import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
