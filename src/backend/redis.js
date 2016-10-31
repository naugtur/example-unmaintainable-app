//fake redis, but easy to replace with real thing. just replace this with ioredis
var RedisMock = require('ioredis-mock').default;
var redis = new RedisMock({
    data: {}
});

redis.hset('users:1', 'id', 1);
redis.hset('users:1', 'name', 'john');
redis.hset('users:1', 'joined', Date.now() - 10000000);

redis.hset('users:2', 'id', 2);
redis.hset('users:2', 'name', 'tim');
redis.hset('users:2', 'joined', Date.now() - 20000000);

redis.set('nextuser', 3);

module.exports = redis;
