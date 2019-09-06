import React, { Component } from 'react';
import BlogContext from '../../contexts/BlogContext';
import SortBar from '../../components/SortBar/SortBar';

export default class BlogPage extends Component {
  static contextType = BlogContext;

  renderBlog() {
    const { blogPosts = [] } = this.context;
    return blogPosts.map((post, index) =>
      <li
        key={index}
      >
        <h3>{post.title}</h3>
        <span>{post.preview}</span>
      </li>
    )
  }

  render() {
    return (
      <main>
        <h2>Blog Header</h2>
        <SortBar />
        <section>  
          <ul>
            {this.renderBlog()}
          </ul>
        </section>
      </main>
    )
  }
}