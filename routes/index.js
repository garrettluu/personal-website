module.exports = function (app) {
  const express = require('express');
  const router = express.Router();
  const handle = app.getRequestHandler();


  /* Handle requests with Next.js */
  router.get('/', (req, res) => {
    // return handle(req, res);
    return app.render(req, res, '/index');
  });

  return router;
};

