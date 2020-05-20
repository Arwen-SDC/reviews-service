/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/index.js');

const app = express();
const PORT = 3002;
const jsonParser = bodyParser.json();

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}!`);
});

app.use(express.static('public'));
app.use('/games/:gameId', express.static('public'));
// ---------------Read route---------------------------------------- //
app.get('/reviews/:gameId', (req, res) => {
  db.Review.find({ gameId: req.params.gameId }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});
// -----------------Update route -----------------------------------//
app.post('/reviews/:gameId', jsonParser, (req, res) => {
  db.Review.findById(req.body.id, (err, review) => {
    if (err) {
      res.status(500).send(err);
    } else if (req.body.voteString === 'yes') {
      review.meta.helpful += 1;
      review.save((error) => {
        if (err) {
          res.status(500).send(error);
        } else {
          res.status(202).send();
        }
      });
    } else if (req.body.voteString === 'no') {
      review.meta.unhelpful += 1;
      review.save((error) => {
        if (err) {
          res.status(500).send(error);
        } else {
          res.status(202).send();
        }
      });
    } else {
      res.status(400).send(`"Bad Vote String: ${req.body.voteString}"`);
    }
  });
});
// ---------------------Create route -------------------------------------//
app.post('/reviews/:gameId', (req, res) => {
  const newReview = req.body;
  db.Review.save(newReview, err => {
    if (err) {
      res.send('There was an error adding a review');
    } else {
      res.send('Review saved!');
    }
  });
});

// -----------------------Delete route -----------------------------------//
app.post('/reviews/:gameId', (req, res) => {
  const gameId = req.body.gameId;
  const email = req.body.email;
  const reviewToDelete = { gameId: gameId, email: email };
  db.Review.deleteOne(reviewToDelete);
})
