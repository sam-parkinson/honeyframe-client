import React, { Component } from 'react';

class DemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      post: '',
      cat_id: '1',
    }
  }

  state = { error: null }

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
    const { title, post, category } = e.target;

    console.log('Demo Blog Post:');
    console.log(`Title: ${title.value}`);
    console.log(`Post: ${post.value}`);
    console.log(`Category: ${category.value}`);    
  }

  render() {
    return (
      <form
        className="loginForm"
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
          <label htmlFor="category">Category</label>
          <br />
          <select
            id="category"
            defaultValue="1"
            onChange={(e) => this.handleCatId(e.target.value)}
            required
          >
            <option value="News">News</option>
            <option value="Personal">Personal</option>
            <option value="Shop">Shop</option>
            <option value="Other">Other</option>
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
}

export default DemoForm;