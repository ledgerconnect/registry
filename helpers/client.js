const dhive = require('@hiveio/dhive');

module.exports = new dhive.Client(process.env.HIVED_URL || 'https://api.hive.blog');
