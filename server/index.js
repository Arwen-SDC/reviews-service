/* eslint-disable linebreak-style */
require('newrelic');
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
app.get('/reviews/:gameId', (req,res) => {
  db.getGameReviews(req.params.gameId, (reviews) => {
    const formattedData = [];
    for (var i = 0; i < reviews.length; i ++) {
      let review = reviews[i];
      let newObj = {
        _id: review.id,
        gameId: review.gameid,
        date: '2020-04-22T16:36:21.548+00:00',
        meta: {
          helpful: review.helpful,
          unhelpful: review.unhelpful,
        },
        ageBracket: review.agebracket,
        appeal: review.appeal,
        buyForSelf: review.buyforself,
        email: review.email,
        gameplay: review.gameplay,
        gender: review.gender,
        graphics: review.graphics,
        location: review.location,
        nickname: review.nickname,
        overall: review.overall,
        ownershipBracket: review.ownershipbracket,
        purchaseOnline: review.purchaseonline,
        readReviews: review.readreviews,
        recommend: review.recommend,
        recommendBGS: review.recommendbgs,
        review: review.review,
        title: review.title,
      };
      formattedData.push(newObj);
    }
    res.status(200).send(formattedData);
  }

  )}
);

// ----------------POST ROUTE--------------------------//
app.post('/addGame/:gameid', (req, res) => {
  const newGame = { 'Batman: Arkham Asylum': 'All completed' };
  res.send(newGame);
})

// -----------------Update route -----------------------------------//
// app.post('/reviews/:gameId', jsonParser, (req, res) => {
//   db.Review.findById(req.body.id, (err, review) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (req.body.voteString === 'yes') {
//       review.meta.helpful += 1;
//       review.save((error) => {
//         if (err) {
//           res.status(500).send(error);
//         } else {
//           res.status(202).send();
//         }
//       });
//     } else if (req.body.voteString === 'no') {
//       review.meta.unhelpful += 1;
//       review.save((error) => {
//         if (err) {
//           res.status(500).send(error);
//         } else {
//           res.status(202).send();
//         }
//       });
//     } else {
//       res.status(400).send(`"Bad Vote String: ${req.body.voteString}"`);
//     }
//   });
// });