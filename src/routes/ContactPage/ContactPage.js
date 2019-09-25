import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactPage.css';

export default class ContactPage extends Component {
  render () {
    return (
      <main>
        <h2>Contact Us!</h2>
        <section>
          <ContactForm 
            history={this.props.history}
          />
        </section>
      </main>
    )
  }
}