import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul>
          <li>
            <Link to={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link to={'/news'}>
              News
            </Link>
          </li>
          <li>
            <Link to={'/store'}>
              Shop
            </Link>
          </li>
          <li>
            <Link to={'/contact'}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;