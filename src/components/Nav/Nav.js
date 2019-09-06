import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/blog'}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={'/store'}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;