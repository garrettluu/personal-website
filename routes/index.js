module.exports = function (app) {
  var express = require('express');
  var router = express.Router();
  let handle = app.getRequestHandler();

  /* Handle requests with Next.js */
  router.get('*', function (req, res) {
    return handle(req, res);
  });

  return router;
};

