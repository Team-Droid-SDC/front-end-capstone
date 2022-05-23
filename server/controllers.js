const axios = require('axios');
require("dotenv").config();

const {API_URL, TOKEN} = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = TOKEN;

module.exports.reviews = {
  get: (req, res) => {
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
  },
}

module.exports.products = {
  get: (req, res) => {
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
  },
}

module.exports.styles = {
  get: (req, res) => {
    axios.get(req.originalUrl)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.send(err);
      })
  }
}