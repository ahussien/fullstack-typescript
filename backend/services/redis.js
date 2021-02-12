'use strict';
const redis = require('redis');
const { promisifyAll } = require('bluebird');
const config = require('../config/index');
const logger = require('../services/logger');

const client = redis.createClient(config.redisURL);

promisifyAll(redis);

client.on('error', error => logger.error(error));

client.on('connect', function () {
    logger.info('Redis database connection successful');
});

module.exports = client;