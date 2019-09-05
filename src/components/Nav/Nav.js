import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;