import config from '../config';

const ContactApiService = {
  postContact(first_name, last_name, email, phone = null, comment = null) {
    return fetch(`${config.API_ENDPOINT}/contact`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone,
        comment
      })
    })
    .then(res =>
      (!res.ok) 
        ? res.json().then(e => Promise.reject(e))
        : res.json()   
    )
  }
};

export default ContactApiService;