import React, { Component } from 'react';
import Checkout from '../Checkout/Checkout';
import CartContext from '../../contexts/CartContext';
import './Cart.css';

export default class Cart extends Component {
  static contextType = CartContext;

  renderCart() {
    const { cartItems = [] } = this.context;
    return cartItems.map((item, index) =>
      <li key={index}>
        <p>
          <span>{item.item_name} </span>
          <span>${item.price}</span>
          {item.date_harvested && <span> Harvest date: {new Date(item.date_harvested).toLocaleDateString()}</span>}
        </p>
      </li>
    )
  }

  render() {
    return (
      <section className="cart">
        {this.context.totalPrice && <h2>Cart</h2>}
        {this.context.totalPrice && <p>Total: ${this.context.totalPrice}</p>}
        <ul className="cartList">
          {this.renderCart()}
        </ul>
        {this.context.totalPrice && <Checkout />}
      </section>
    )
  }
}