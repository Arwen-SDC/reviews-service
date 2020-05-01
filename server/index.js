const express = require('express');
const db = require('./db/index.js');

const app = express();
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});

app.use('/games/:gameId', express.static('public'));

app.get('/reviews/:gameId', (req, res) => {
  db.Review.find({ gameId: req.params.gameId }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});
