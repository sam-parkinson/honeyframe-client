import React, { Component } from 'react';
import BlogContext from '../../contexts/BlogContext';

export default class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  static contextType = BlogContext;

  componentDidMount() {
    const post = this.context.blogPosts.find(p => 
      p.id === this.props.match.params.post_id
    );
    this.setState({
      post: post
    })
  }

  render() {
    return (
      <main>
        <h2>{this.state.post.title}</h2>
        <section>
          <p>
            {this.state.post.body}
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