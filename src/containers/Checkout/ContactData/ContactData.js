import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.module.css';
import axios from '../../../axios-orders';

export class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Gofi Goni',
        adress: {
          street: 'Strada Strazii nr. numar',
          zipCode: '345346',
          country: 'Uganda',
        },
        email: 'email@test.com',
      },
      deliveryMethod: 'fastest',
    };
    // alert('You continue !!');
    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Your Street Name" />
        <input type="text" name="postal" placeholder="Your Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your data here:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
