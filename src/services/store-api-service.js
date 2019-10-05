import config from '../config';

const StoreApiService = {
  getAllItems() {
    return fetch(`${config.API_ENDPOINT}/store`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postToken(token) {
    return fetch(`${config.API_ENDPOINT}/order`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({token: token})
    })
    .then(res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json()   
    )
  }
};

export default StoreApiService;