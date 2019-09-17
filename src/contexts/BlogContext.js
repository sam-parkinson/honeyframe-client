import React, { Component } from 'react';
import { blog } from './store'

const BlogContext = React.createContext({
  blogPosts: [],
  blogPostViewed: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setBlogPosts: () => {},
  setBlogPostViewed: () => {},
});

export default BlogContext;

export class BlogProvider extends Component {
  state = {
    blogPosts: [],
    error: null,
  }

  setBlogPosts = blogPosts => {
    this.setState({ blogPosts })
  }

  setBlogPostViewed = blogPostViewed => {
    this.setState({ blogPostViewed })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      blogPosts: this.state.blogPosts,
      blogPostViewed: this.state.blogPostViewed,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setBlogPosts: this.setBlogPosts,
      setBlogPostViewed: this.setBlogPostViewed
    }

    return (
      <BlogContext.Provider value={value}>
        {this.props.children}
      </BlogContext.Provider>
    )
  }
}