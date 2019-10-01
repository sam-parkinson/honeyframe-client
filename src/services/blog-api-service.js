import TokenService from '../services/token-service'
import config from '../config';

const BlogApiService = {
  getAllBlogPosts() {
    return fetch(`${config.API_ENDPOINT}/blog`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBlogPostById(id) {
    return fetch(`${config.API_ENDPOINT}/blog/${id}`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postBlog(title, post, cat_id) {
    return fetch(`${config.API_ENDPOINT}/blog`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title,
        post,
        cat_id
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  }
};

export default BlogApiService;