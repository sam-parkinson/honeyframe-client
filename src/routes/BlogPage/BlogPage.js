import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';
import SortBar from '../../components/SortBar/SortBar';
import './BlogPage.css';

export default class BlogPage extends Component {
  static contextType = BlogContext;

  componentDidMount() {
    this.context.clearError();
    BlogApiService.getAllBlogPosts()
      .then(this.context.setBlogPosts)
      .catch(this.context.setError)
  }

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
        {/* <SortBar /> */}
        <section>  
          <ul className='blogList'>
            {this.renderBlog()}
          </ul>
        </section>
      </main>
    )
  }
}