import React, { Component } from 'react';

export default class StorePage extends Component {
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
            <label htmlFor="sort">Sort</label>
            <select id="sort">
              <option>Sort option</option>
              <option>Sort option</option>
            </select>
            <button>Filter</button>
          </form>
        </section>
        <section>  
          <ul>
            <li>Item name and info</li>
            <li>Item name and info</li>
            <li>Item name and info</li>
          </ul>
        </section>
      </main>
    )
  }
}