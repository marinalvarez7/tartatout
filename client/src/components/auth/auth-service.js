// components/auth/auth-service.js

import axios from 'axios';

export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/auth`,
    withCredentials: true
  }),

  login(email, password) {
    return this.service.post('/login', {email, password})
      .then(response => response.data)
  },

  signup(email, password) {
    return this.service.post('/signup', {
      email,
      password
    })
      .then(response => response.data)
  },

  loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data)
  },

  logout() {
    return this.service.get('/logout', {})
      .then(response => response.data)
  },

  edit(email, password) {
    return this.service.post('/edit', {
      email,
      password
    })
      .then(response => response.data)
  },

  upload(formdata) {
    return this.service.post('/upload', formdata)
      .then(response => response.data)
  }
};