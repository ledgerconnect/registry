const dhive = require('@hiveio/dhive');
const client = require('./helpers/client');

const username = process.env.BROADCASTER_USERNAME;
const privateKey = dhive.PrivateKey.fromString(process.env.BROADCASTER_POSTING_WIF.toString());
const rootPostAuthor = 'steemguest';
const rootPostPermlink = 'oracle';
const permlink = 'top-apps';
const body = 'Top apps';

const data = [
  'ecency.app',
  'peakd.app',
  'hive.blog',
  'cryptobrewmaster',
  'holybread.app',
  'actifit.app',
  'dapplr',
  'buildteam.app',
];

const metadata = { data };
const comment = {
  parent_author: rootPostAuthor,
  parent_permlink: rootPostPermlink,
  author: username,
  permlink,
  title: '',
  body,
  json_metadata: JSON.stringify(metadata),
};
client.broadcast
  .comment(comment, privateKey)
  .then(result => console.log(result))
  .catch(e => console.error(e));
