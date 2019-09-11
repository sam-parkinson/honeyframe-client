import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

/* Form does a POST request to the database? */

export default class ContactPage extends Component {
  render () {
    return (
      <main>
        <h2>Contact Us!</h2>
        <section>
          <ContactForm />
        </section>
      </main>
    )
  }
}