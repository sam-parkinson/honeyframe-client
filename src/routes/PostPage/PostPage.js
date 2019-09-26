import React, { Component } from 'react';
import BlogContext from '../../contexts/BlogContext';
import BlogApiService from '../../services/blog-api-service';

export default class PostPage extends Component {
  static defaultprops = {
    match: { params: { post_id: null } }
  }

  static contextType = BlogContext;

  componentDidMount() {
    this.context.clearError()
    const postId = this.props.match.params.post_id
    BlogApiService.getBlogPostById(postId)
      .then(this.context.setBlogPostViewed)
      .catch(this.context.setError)
  }

  render() {
    const { blogPostViewed = {} } = this.context
    return (
      <main>
        <h2>{blogPostViewed.title}</h2>
        <section>
          <p>
            {blogPostViewed.post}
          </p>
          <button
            onClick={() => this.props.history.push('/news')}
          >
            Back
          </button>
        </section>
      </main>
    )
  }
}