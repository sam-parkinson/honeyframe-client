import React, { Component } from 'react';

export default class BlogPage extends Component {
  render() {
    return (
      <main>
        <h2>Blog Header</h2>
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
            <li>Post name and info</li>
            <li>Post name and info</li>
            <li>Post name and info</li>
          </ul>
        </section>
      </main>
    )
  }
}