const dsteem = require('dsteem');
const client = require('./helpers/client');

const username = process.env.STEEM_USERNAME;
const privateKey = dsteem.PrivateKey.fromString(process.env.STEEM_POSTING_WIF);
const rootPostAuthor = 'steemguest';
const rootPostPermlink = 'oracle';
const permlink = 'top-apps';
const body = 'Top apps';

const data = [
  // 'steemit',
  'drugwars.app',
  // 'steemmonsters',
  'partiko.app',
  'nextcolony',
  'busy.app',
  'actifit.app',
  'dlike.app',
  'esteem-app',
  'magicdice-app',
  'steemhunt.com',
  'share2steem.app',
  'dtube.app',
  'steempeak.app',
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
client.broadcast.comment(comment, privateKey)
  .then(result => console.log(result))
  .catch(e => console.error(e));
