const kbyte = require('kbyte');
const Promise = require('bluebird');

Promise.promisifyAll(kbyte.Client.prototype);
const client = new kbyte.Client('wss://obyte.org/bb');

module.exports = client;
