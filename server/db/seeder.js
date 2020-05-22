/* eslint-disable linebreak-style */
const faker = require('faker');

// const mongoose = require('mongoose');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'review_list',

});
// const query = 'SELECT * from reviews where gameid = 102345 ALLOW FILTERING';
// client.execute(query)
//   .then(res => {
//     console.log(res.rows);
//   })
//   .catch(err => {
//     console.log(err);
//   });
for (let i = 0; i <= 1; i += 1) {
  let id = i;
  const gameID = Math.floor(Math.random() * 1000);
  let reviewDate = faker.date.recent(90);
  let overall = Math.floor(Math.random() * 5);
  let title = faker.name.firstName() + ' ' + faker.name.lastName();
  console.log(title);
  let review = faker.lorem.paragraph();
  let recommend = faker.random.boolean();
  let nickname = faker.internet.userName();
  let location = faker.address.city() + ' ' + faker.address.state();
  let email = faker.internet.email();
  let buyForSelf = faker.random.boolean();
  let ageBracket = Math.ceil(Math.random() * 8);
  let gender = Math.ceil(Math.random() * 4);
  let graphics = Math.ceil(Math.random() * 5);
  let gameplay = Math.ceil(Math.random() * 5);
  let appeal = Math.ceil(Math.random() * 5);
  let ownershipBracket = Math.ceil(Math.random() * 5);
  let purchaseOnline = faker.random.boolean();
  let readReviews = faker.random.boolean();
  let recommendBGS = Math.ceil(Math.random() * 10);
  let helpful = Math.floor(Math.random() * 101);
  let unhelpful = Math.floor(Math.random() * 101);
  let queryStri = `INSERT INTO reviews (id, gameID, review_date, overall, title, review, recommend, nickname, location, email, buyForSelf, ageBracket, gender, graphics, gameplay, appeal, ownershipBracket, purchaseOnline, readReviews, recommendBGS, helpful, unhelpful) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const params = [id, gameID, reviewDate, overall, title, review, recommend, nickname, location, email, buyForSelf, ageBracket, gender, graphics, gameplay, appeal, ownershipBracket, purchaseOnline, readReviews, recommendBGS, helpful, unhelpful];
  let queryStr = `INSERT INTO reviews (id, gameID, overall, title, review, recommend, nickname, location, email, buyForSelf, ageBracket, gender, graphics, gameplay, appeal, ownershipBracket, purchaseOnline, readReviews, recommendBGS, helpful, unhelpful) VALUES (${id},${gameID},${overall},${title},${review},${recommend},${nickname},${location},${email},${buyForSelf},${ageBracket},${gender},${graphics},${gameplay},${appeal},${ownershipBracket},${purchaseOnline},${readReviews},${recommendBGS},${helpful},${unhelpful})`;
   client.execute(queryStri, params, {prepare: true}, err => {
      if (err) console.log(err);
   });
}
console.log("seeding finished");
// mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connection to database successful!');
//   const reviewSchema = new mongoose.Schema({
//     gameId: Number,
//     date: { type: Date, default: Date.now },
//     overall: Number,
//     title: String,
//     review: String,
//     recommend: Boolean,
//     nickname: String,
//     location: String,
//     email: String,
//     buyForSelf: Boolean,
//     ageBracket: Number,
//     gender: Number,
//     graphics: Number,
//     gameplay: Number,
//     appeal: Number,
//     ownershipBracket: Number,
//     purchaseOnline: Boolean,
//     readReviews: Boolean,
//     recommendBGS: Number,
//     meta: {
//       helpful: Number,
//       unhelpful: Number,
//     },
//   });

//   const Review = mongoose.model('Review', reviewSchema);

//   function seed(Schema, num) {
//     for (let i = 1; i <= num; i += 1) {
//       const numOfReviews = Math.ceil(Math.random() * 20);

//       for (let j = 0; j < numOfReviews; j += 1) {
//         const review = new Schema({
//           gameId: i,
//           date: faker.date.recent(90),
//           overall: Math.ceil(Math.random() * 5),
//           title: faker.fake('{{company.catchPhraseAdjective}} {{commerce.productAdjective}} {{company.bsNoun}}'),
//           review: faker.lorem.paragraph(),
//           recommend: faker.random.boolean(),
//           nickname: faker.internet.userName(),
//           location: faker.fake('{{address.city}}, {{address.state}}'),
//           email: faker.internet.email(),
//           buyForSelf: faker.random.boolean(),
//           ageBracket: Math.ceil(Math.random() * 8),
//           gender: Math.ceil(Math.random() * 4),
//           graphics: Math.ceil(Math.random() * 5),
//           gameplay: Math.ceil(Math.random() * 5),
//           appeal: Math.ceil(Math.random() * 5),
//           ownershipBracket: Math.ceil(Math.random() * 5),
//           purchaseOnline: faker.random.boolean(),
//           readReviews: faker.random.boolean(),
//           recommendBGS: Math.ceil(Math.random() * 10),
//           meta: {
//             helpful: Math.floor(Math.random() * 101),
//             unhelpful: Math.floor(Math.random() * 101),
//           },
//         });

//         review.save()
//           .then(() => {
//             if (i === num && j === numOfReviews - 1) {
//               console.log('Seeded!');
//               db.close();
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     }
//   }

//   mongoose.connection.db.listCollections({ name: 'reviews' })
//     .next((err, names) => {
//       if (err) {
//         console.log(err);
//       } else if (names) {
//         mongoose.connection.db.dropCollection('reviews', (error) => {
//           if (error) {
//             console.log(error);
//             return;
//           }
//           console.log('Collection "reviews" dropped!');
//           seed(Review, 100);
//         });
//       } else {
//         seed(Review, 100);
//       }
//     });
// });
