const redis = require('./redis');
const p = require('bluebird');

module.exports = {
    getDatabaseKeys(tab){
        return redis.keys(tab);

    },
    getDatabaseAll(key){
        return redis.hgetall(key);
    },
    setDataToDataBase(user, table){

        return redis.get(`next${table}`)
            .then(nextId => {
                let promises = [];
                user.prepareToInsert((keys, value) => {
                    const tabId = `${table}:${nextId}`;
                    promises = [redis.hset(tabId, 'id', nextId)];
                    keys.map(key => {
                        promises = [...promises, redis.hset(tabId, key, value[key])]
                    });
                    promises = [...promises, redis.set(`next${table}`, nextId++)];
                });

                return p.all(promises).then(() => {

                    let object = {id: --nextId};

                    user.prepareToInsert((keys, value) => {
                        keys.map(key => {
                            object[key] = value[key];
                        });
                    });

                    return object;
                })
            })

    }

}
