const redis = require('./redis');

module.exports = {
    getDatabaseKeys(tab){
        return redis.keys(tab);

    },
    getDatabaseAll(key){
        return redis.hgetall(key);
    }

}
