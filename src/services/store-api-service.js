import config from '../config';

const StoreApiService = {
  getAllItems() {
    return fetch(`${config.API_ENDPOINT}/store`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
};

export default StoreApiService;