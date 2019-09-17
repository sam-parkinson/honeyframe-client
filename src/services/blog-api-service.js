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
  }
};

export default BlogApiService;