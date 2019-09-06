import React, { Component } from 'react';
import StoreContext from '../../contexts/StoreContext';
import SortBar from '../../components/SortBar/SortBar';

export default class StorePage extends Component {
  static contextType = StoreContext;

  renderStore() {
    const { storeItems = [] } = this.context;
    return storeItems.map((item, index) => 
      <li
        key={index}
      >
        <h3>{item.name}</h3>
        <span>Harvest date: {item.harvest_date}</span>
      </li>
    )
  }

  render() {
    return (
      <main>
        <h2>Store</h2>
        <SortBar />
        <section>  
          <ul>
            {this.renderStore()}
          </ul>
        </section>
      </main>
    )
  }
}