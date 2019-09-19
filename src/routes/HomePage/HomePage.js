import React, { Component } from 'react';

/*
  TODO:
    Replace generic welcome h2 with wide image
*/

export default class HomePage extends Component {
  render () {
    return (
      <main>
        <h2>Welcome to Honeyframe!</h2>
        <section>
          <img src="https://picsum.photos/400/200" alt="Placeholder" />
          <h3>Mission Statement</h3>
          <p>
            We are Anytown-based beekeepers with a passion for local honey and hand-crafted beeswax goods! 
            We strive to make our town a more beautiful place by providing a home for nature’s pollinators to do their work, 
            while providing you with delicious honey made from wild flowers as well as beeswax and raw comb!
          </p>
        </section>
      </main>
    )
  }
}