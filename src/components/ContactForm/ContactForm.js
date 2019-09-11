import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form>
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email"></input>
        </p>
        <p>
          <label htmlFor="firstname">First Name</label>
          <br />
          <input id="firstname" type="text"></input>
        </p>
        <p>
          <label htmlFor="lastname">Last Name</label>
          <br />
          <input id="lastname" type="text"></input>
        </p>
        <p>
          <label htmlFor="comment">Comments</label>
          <br />
          <textarea id="comment" maxLength="1000"></textarea>
        </p>
        <button>Submit</button>
      </form>
    )
  }
}

export default ContactForm;