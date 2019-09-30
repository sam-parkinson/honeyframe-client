import React, { Component } from 'react';
import CartContext from '../../contexts/CartContext';
import config from '../../config';

export default class StoreItem extends Component {
  static contextType = CartContext;

  static defaultProps = {
    id: null,
    item: {},
  }

  addToCart = (item) => {
    this.context.addItemToCart(item);
  }

  render() {
    const item = this.props.item;
    return (
      <li
        className="storeItem"
      >
        <h3>{item.item_name}</h3>
        {item.img_url && <img src={`${config.API_ENDPOINT}/${item.img_url}`} alt={item.item_name} />}
        {item.item_desc && <p>{item.item_desc}</p>}
        <p>${item.price}</p>
        {item.date_harvested && <p>Harvest date: {new Date(item.date_harvested).toLocaleDateString()}</p>}
        <button
          onClick={() => this.addToCart(item)}
        >
          Add to Cart
        </button>
      </li>
    )
  }
}