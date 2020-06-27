const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: 6379,
  enable_offline_queue: false,
});

module.exports = redisClient
