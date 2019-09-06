import React, { Component } from 'react';
import { blog } from './store'

const BlogContext = React.createContext({
  blogPosts: blog,
});

export default BlogContext;

export class BlogProvider extends Component {
  state = {
    blogPosts: blog,
  }

  render() {
    const value = {
      blogPosts: this.state.blogPosts,
    }

    return (
      <BlogContext.Provider value={value}>
        {this.props.children}
      </BlogContext.Provider>
    )
  }
}