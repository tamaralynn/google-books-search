const axios = require("axios");

const googleSearch = {
  queryGoogle(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
}}

module.exports = googleSearch;