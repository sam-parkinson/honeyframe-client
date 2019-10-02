import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CartContext from '../../contexts/CartContext';

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props);

  }

  static contextType = CartContext

  onToken = (token) => {

  }

  render() {
    return (
      <StripeCheckout 
        amount={this.context.totalPrice}
        currency="USD"
        shippingAddress
        token={this.onToken}
      />
    )
  }
}