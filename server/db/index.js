/* eslint-disable linebreak-style */

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'review_list',
  password: 'student',
  port: 5432,
});

client.connect();

const getGameReviews = (id, callback) => {
  let queryStr = `SELECT * from reviews WHERE gameid = ${id}`;
  client.query(queryStr, (err, res) => {
    if(err) {
      callback(err);
    } else {
      callback(res.rows);
    }
  })
};

module.exports = {
  getGameReviews,
}
