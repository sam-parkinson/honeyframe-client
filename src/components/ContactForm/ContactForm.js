import React, { Component } from 'react';
import ContactApiService from '../../services/contact-api-service';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      comment: '',
    }
  }

  state = { error: null }

  handleFirstName(first_name) {
    this.setState({first_name});
  }

  handleLastName(last_name) {
    this.setState({last_name});
  }

  handleEmail(email) {
    this.setState({email});
  }

  handlePhone(phone) {
    this.setState({phone});
  }

  handleComment(comment) {
    this.setState({comment});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: null });
    const { first_name, last_name, email, phone, comment } = e.target;

    ContactApiService.postContact(
      first_name.value,
      last_name.value,
      email.value,
      phone.value,
      comment.value
    )
      .then(() => {
        first_name.value = '';
        last_name.value = '';
        email.value = '';
        phone.value = '';
        comment.value = '';
      })
  }

  render() {
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
      >
        <p>
          <label htmlFor="email">Email</label>
          <br />
          <input 
            id="email" 
            type="email"
            onChange={(e) => this.handleEmail(e.target.value)}  
            required
          />
        </p>
        <p>
          <label htmlFor="first_name">First Name</label>
          <br />
          <input 
            id="first_name" 
            type="text" 
            onChange={(e) => this.handleFirstName(e.target.value)} 
            required 
          />
        </p>
        <p>
          <label htmlFor="last_name">Last Name</label>
          <br />
          <input 
            id="last_name" 
            type="text" 
            onChange={(e) => this.handleLastName(e.target.value)} 
            required 
          />
        </p>
        <p>
          <label htmlFor="phone">Phone</label>
          <br />
          <input 
            id="phone" 
            type="tel" 
            onChange={(e) => this.handlePhone(e.target.value)} 
          />
        </p>
        <p>
          <label htmlFor="comment">Comments</label>
          <br />
          <textarea 
            id="comment" 
            maxLength="1000"
            onChange={(e) => this.handleComment(e.target.value)} 
          />
        </p>
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  }
}

export default ContactForm;