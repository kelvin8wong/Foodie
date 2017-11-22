const express = require('express')
const router = express.Router()

module.exports = (DataHelpers) => {

  router.get('/', (req, res) => {
    console.log(req.body);
  });
  router.post('/', (req,res) => {
    console.log(req.body);
  }
  return router
}
