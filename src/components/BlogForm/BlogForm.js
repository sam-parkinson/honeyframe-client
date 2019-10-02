import React, { Component } from 'react';
import BlogApiService from '../../services/blog-api-service';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      title: '',
      post: '',
      cat_id: '1',
    }
  }

  state = { error: null }

  componentWillUmount() {
    this.setState({ submitted: false });
  }

  handleTitle(title) {
    this.setState({title});
  }

  handlePost(post) {
    this.setState({post});
  }

  handleCatId(cat_id) {
    this.setState({cat_id})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      error: null
    });
    const { title, post, cat_id } = e.target;

    BlogApiService.postBlog(
      title.value,
      post.value,
      cat_id.value
    )
      .then(() => {
        title.value = '';
        post.value = '';
        cat_id.value = '1';
        this.setState({ submitted: true })
      })
  }

  renderForm() {
    return (
      <form
        className="blogForm"
        onSubmit={e => this.handleSubmit(e)}
      >
        <p>
          <label htmlFor="title">Title</label>
          <br />
          <input 
            id="title"
            type="text"
            onChange={(e) => this.handleTitle(e.target.value)}
            required
          /> 
        </p>
        <p>
          <label htmlFor="post">Post</label> 
          <br />
          <textarea 
            id="post"
            type="text"
            onChange={(e) => this.handlePost(e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="cat_id">Category</label>
          <br />
          <select
            id="cat_id"
            defaultValue="1"
            onChange={(e) => this.handleCatId(e.target.value)}
            required
          >
            <option value="1">News</option>
            <option value="2">Personal</option>
            <option value="3">Shop</option>
            <option value="4">Other</option>
          </select>
        </p>
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    )
  }

  renderSubmitted() {
    return (
      <div className="blogForm" >
        <p>
          Blog Post Submitted!
        </p>
        <button
          onClick={() =>
            this.setState({ submitted: false })
          }
        >
          New Post
        </button>
      </div>
    )
  }

  render() {
    return (
      this.state.submitted
        ? this.renderSubmitted()
        : this.renderForm()
    )
  }
}

export default BlogForm;