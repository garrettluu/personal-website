module.exports = (app, client) => {
  const express = require('express');
  const router = express.Router();
  const handle = app.getRequestHandler();

  router.get('/', async (req, res) => {
    await client.connect((err, client) => {
      console.log("Connected to database");

      const db = client.db('website-data')

      const entries = db.collection('blog-entries');

      entries.find({}, {title: true, date: true}).toArray((err, result) => {
        res.send(result);
        client.close();
      });
    });
  });

  /* GET users listing. */
  router.get('/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    if (queryParams.id === "1") {
      return "Hello world!";
    } else {
      return "Goodbye world";
    }
  });

  router.get('*', (req, res) => {
    return handle(req, res);
  });

  return router;
}

