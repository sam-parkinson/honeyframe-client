import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Header.css';

/* 
  TODO: h1 or h1 section links back to home page
*/

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link
            to={'/'}
          >
            Honeyframe Beekeeping
          </Link>          
        </h1>
        <Nav />
      </header>
    )
  }
}