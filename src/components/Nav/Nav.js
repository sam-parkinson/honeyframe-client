import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul
          className='navList'
        >
          <li
            className='navLink'
          >
            <Link to={'/about'}>
              About
            </Link>
          </li>
          <li
            className='navLink'
          >
            <Link to={'/news'}>
              News
            </Link>
          </li>
          <li
            className='navLink'
          >
            <Link to={'/store'}>
              Shop
            </Link>
          </li>
          <li
            className='navLink'
          >
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