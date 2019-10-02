import React, { Component } from 'react';
import BlogForm from '../../components/BlogForm/BlogForm';
import './AdminPage.css';

export default class AdminPage extends Component {
  render() {
    return (
      <main>
        <h2>Add Blog Posts</h2>
        <section>
          <BlogForm />
        </section>
      </main>
    )
  }
}