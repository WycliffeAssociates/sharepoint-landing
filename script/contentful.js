'use strict';

const dotenv = require('dotenv');
const contentful = require('contentful');

dotenv.config();

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

function compareText(firstLink, secondLink) {
  const firstText = firstLink.text.toLowerCase();
  const secondText = secondLink.text.toLowerCase();

  return firstText === secondText
    ? 0
    : firstText > secondText
      ? 1
      : -1;
}

function getLinks() {
  const query = {
    'content_type': 'link'
  };

  return client.getEntries(query)
    .then(response => (
      response.items
        .map(item => item.fields)
        .sort(compareText)
    ))
    .catch(console.error);
}

module.exports = getLinks;
