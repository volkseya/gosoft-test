// * You may uncomment one of these modules:
const express = require('express');
// const koa = require('koa');
// const hapi = require('@hapi/hapi');
// const restify = require('restify');

module.exports = (stepService) => {
  const REST_PORT = 8080;

  // * TODO: Write the GET endpoint, using `stepService` for data access
  const app = express();

  app.get('/users/:username/steps', function (req, res) {
    const data = stepService.get(req.params.username);
    if (data) {
      res.status(200).json(data)
    } else {
      res.status(404).json({ "error": "User doesn't exist" })
    }
  })

  const server = app.listen(REST_PORT, () => {
    console.log('Connected to port ' + REST_PORT)
  })

  close = () => {
    server.close;
  }

};
