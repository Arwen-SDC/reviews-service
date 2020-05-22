/* eslint-disable linebreak-style */
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, '/../data.csv');
const writeUsers = fs.createWriteStream(writePath);
writeUsers.write('id, gameID, review_date, overall, title, review, recommend, nickname, location, email, buyForSelf, ageBracket, gender, graphics, gameplay, appeal, ownershipBracket, purchaseOnline, readReviews, recommendBGS, helpful, unhelpful\n', 'utf8');

function generator(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id}, ${Math.floor(Math.random() * 1000000)}, ${faker.date.recent(90)}, ${Math.floor(Math.random() * 5)}, "${faker.name.firstName() + ' ' + faker.name.lastName()}", "${faker.lorem.paragraph()}", ${faker.random.boolean()}, "${faker.internet.userName()}", "${faker.address.city() + ' ' + faker.address.state()}", "${faker.internet.email()}", ${faker.random.boolean()}, ${Math.ceil(Math.random() * 8)}, ${Math.ceil(Math.random() * 4)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${faker.random.boolean()}, ${faker.random.boolean()}, ${Math.ceil(Math.random() * 10)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
generator(writeUsers, 'utf-8', () => {
  writeUsers.end();
});