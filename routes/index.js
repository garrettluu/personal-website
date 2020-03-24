module.exports = function (app) {
  var express = require('express');
  var router = express.Router();
  let handle = app.getRequestHandler();

  /* GET home page. */
  router.get('*', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    return handle(req, res);
  });

  return router;
};

