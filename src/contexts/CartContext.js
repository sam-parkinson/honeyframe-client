import React, { Component } from 'react';

const CartContext = React.createContext({
  cartItems: [],
  totalPrice: null,
  error: null,
  emptyCart: () => {},
  addItemToCart: () => {},
  setError: () => {},
  clearError: () => {},
});

export default CartContext;

export class CartProvider extends Component {
  state = {
    cartItems: [],
    totalPrice: null,
  }

  render() {
    const value = {
      cartItems: this.state.cartItems,
      totalPrice: this.state.totalPrice,
      error: this.state.error
    }

    return (
      <CartContext.Provider value={value}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}