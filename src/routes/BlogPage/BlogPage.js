import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../contexts/BlogContext';
import SortBar from '../../components/SortBar/SortBar';

/* 
  TODO
    refactor somewhat as about articles of interest rather than just blog posts?
*/

export default class BlogPage extends Component {
  static contextType = BlogContext;

  renderBlog() {
    const { blogPosts = [] } = this.context;
    return blogPosts.map((post, index) =>
      <li
        key={index}
      >
        <h3>{post.title}</h3>
        <p>
          {post.preview}
          {' '}
          <Link
            to={`/news/${post.id}`}
          >
            (Read more)
          </Link>
        </p>
      </li>
    )
  }

  render() {
    return (
      <main>
        <h2>News</h2>
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