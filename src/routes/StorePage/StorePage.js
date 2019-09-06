import React, { Component } from 'react';
import StoreContext from '../../contexts/StoreContext';

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
        <section>
          <form>
            <label htmlFor="filter">Filter</label>
            <select id="filter">
              <option>Filter option</option>
              <option>Filter option</option>
            </select>
            <br />
            <label htmlFor="sort">Sort</label>
            <select id="sort">
              <option>Sort option</option>
              <option>Sort option</option>
            </select>
            <br />
            <button>Filter</button>
          </form>
        </section>
        <section>  
          <ul>
            {this.renderStore()}
          </ul>
        </section>
      </main>
    )
  }
}