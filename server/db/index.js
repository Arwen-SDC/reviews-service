// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// const reviewSchema = new mongoose.Schema({
//   gameId: Number,
//   date: { type: Date, default: Date.now },
//   overall: Number,
//   title: String,
//   review: String,
//   recommend: Boolean,
//   nickname: String,
//   location: String,
//   email: String,
//   buyForSelf: Boolean,
//   ageBracket: Number,
//   gender: Number,
//   graphics: Number,
//   gameplay: Number,
//   appeal: Number,
//   ownershipBracket: Number,
//   purchaseOnline: Boolean,
//   readReviews: Boolean,
//   recommendBGS: Number,
//   meta: {
//     helpful: Number,
//     unhelpful: Number,
//   },
// });

// const Review = mongoose.model('Review', reviewSchema);

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connection to database successful!');
// });

// module.exports.Review = Review;
