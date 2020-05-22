/* eslint-disable linebreak-style */
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const writePath = path.join(__dirname, '/../data.csv');
const writeUsers = fs.createWriteStream(writePath);
writeUsers.write('id, ageBracket, appeal, buyforself, email, gameid, gameplay, gender, graphics, helpful, location, nickname, overall, ownershipbracket, purchaseonline, readreviews, recommend, recommendbgs, review, review_date, title, unhelpful\n', 'utf8');

function generator(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const data = `${id}, ${Math.ceil(Math.random() * 8)}, ${Math.ceil(Math.random() * 5)}, ${faker.random.boolean()}, "${faker.internet.email()}", ${Math.floor(Math.random() * 1000000)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 4)}, ${Math.ceil(Math.random() * 5)}, ${Math.floor(Math.random() * 101)}, "${faker.address.city() + ' ' + faker.address.state()}", ${faker.internet.userName()}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${faker.random.boolean()}, ${faker.random.boolean()}, ${faker.random.boolean()}, ${Math.ceil(Math.random() * 10)}, "${faker.lorem.paragraph()}", "${faker.date.recent(90).toString()}", "${faker.name.firstName() + ' ' + faker.name.lastName()}", ${Math.floor(Math.random() * 101)}\n`;
      // const data = `${id}, ${Math.floor(Math.random() * 1000000)}, ${faker.date.recent(90)}, ${Math.floor(Math.random() * 5)}, "${faker.name.firstName() + ' ' + faker.name.lastName()}", "${faker.lorem.paragraph()}", ${faker.random.boolean()}, "${faker.internet.userName()}", "${faker.address.city() + ' ' + faker.address.state()}", "${faker.internet.email()}", ${faker.random.boolean()}, ${Math.ceil(Math.random() * 8)}, ${Math.ceil(Math.random() * 4)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${Math.ceil(Math.random() * 5)}, ${faker.random.boolean()}, ${faker.random.boolean()}, ${Math.ceil(Math.random() * 10)}, ${Math.floor(Math.random() * 101)}, ${Math.floor(Math.random() * 101)}\n`;
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


// var date= faker.date.recent(90).toDateString();
// console.log(date);

// console.log(date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate());
