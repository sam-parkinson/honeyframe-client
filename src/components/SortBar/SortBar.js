import React, { Component } from 'react';

class SortBar extends Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="filter">Filter:{' '}</label>
          <select id="filter">
            <option>Filter option</option>
            <option>Filter option</option>
          </select>
          <br />
          <label htmlFor="sort">Sort:{' '}</label>
          <select id="sort">
            <option>Sort option</option>
            <option>Sort option</option>
          </select>
          <br />
          <button>Filter</button>
        </form>
      </section>
    )
  }
}

export default SortBar;