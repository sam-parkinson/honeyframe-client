import React, { Component } from 'react';
import config from '../../config';

export default class AboutPage extends Component {
  render () {
    return (
      <main>
        <h2>About Us!</h2>
        <section>
          <img 
            className="appImg"
            src={`${config.API_ENDPOINT}/img/about.jpg`} 
            alt="Bees at the entrance of a hive" 
          />
          <h3>History</h3>
          <p>
            We started keeping bees in the spring of 2018 as a hobby both to give us something to do and to help take care of the world around us. 
            A year later, we discovered, our bees had produced a ton of honey! So, we started harvesting the natural, delicious stuff and jarring it. 
            Now, we’d like to share it with you! Check out our store page to see what’s in stock! We have honey from various harvests, as well as beeswax products and raw comb. 
            Honeys harvested at different times in the year have different flavor profiles, so if you’d like to to try a few we even offer sample packs!
          </p>
        </section>
      </main>
    )
  }
}