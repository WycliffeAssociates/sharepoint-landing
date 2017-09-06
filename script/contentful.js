'use strict';

const dotenv = require('dotenv');
const contentful = require('contentful');

dotenv.config();

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

function getLinks() {
  const query = {
    'content_type': 'link'
  };

  return client.getEntries(query)
    .then(response => response.items.map(item => item.fields))
    .catch(console.error);
}

// function build() {
//   console.log('this is function build');
//   getLinks()
//     .then(links => {
//       console.log(links);
//     });
// }

module.exports = getLinks;
