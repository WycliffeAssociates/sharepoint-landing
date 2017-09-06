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
    .then(response => response.items
      .map(item => item.fields)
      .sort((a, b) => a.text.toLowerCase() > b.text.toLowerCase())
    )
    .catch(console.error);
}

module.exports = getLinks;
