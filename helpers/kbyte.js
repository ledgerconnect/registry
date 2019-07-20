const kbyte = require('kbyte');
const Promise = require('bluebird');

Promise.promisifyAll(kbyte.Client.prototype);
const client = new kbyte.Client('wss://obyte.org/bb');

setInterval(() => client.request('heartbeat', null), 10 * 1000);

module.exports = client;
