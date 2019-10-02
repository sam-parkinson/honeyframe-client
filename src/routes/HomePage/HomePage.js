import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';

export default class HomePage extends Component {
  render () {
    return (
      <main>
        <h2>Welcome to Honeyframe!</h2>
        <section>
          <img 
            className="appImg"
            src={`${config.API_ENDPOINT}/img/home.jpg`} 
            alt="Bees at the entrance of a hive" 
          />
          <h3>Mission Statement</h3>
          <p>
            We are Anytown-based beekeepers with a passion for local honey and hand-crafted beeswax goods! 
            We strive to make our town a more beautiful place by providing a home for nature’s pollinators to do their work, 
            while providing you with delicious honey made from wild flowers as well as beeswax and raw comb!
          </p>
          <br />
          <span>
            <Link
              to={'/login'}
            >
              Admin Login
            </Link>
          </span>
        </section>
      </main>
    )
  }
}