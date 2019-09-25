import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>      
        <ul className='footerInfo'>
          <li>Bee Keeper</li>
          <li>555 Generic Ave</li>
          <li>Anytown, USA 24601</li>
          <li>beekeeper@honeyframe.com</li>
          <li>555-555-5555</li>
        </ul>
        <span>
          <Link
            to={'/contact'}
          >
            Order now!
          </Link>
        </span>      
      </footer>
    )
  }
}