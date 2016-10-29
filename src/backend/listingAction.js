const p = require('bluebird');
const databaseConnector = require('./databaseConnector');
const redis = require('./redis');

module.exports = {
    callbackMeTheListing(callback){
        getAll().then(results => {
            callback(results);
        }).catch(error => {
            callback([], error);
        });
    },
    callbackMeTheOne(userId, callback){

        if (Number.isInteger(userId)) {
            getSingleUser(userId).then(result => {
                callback(result);
            }).catch(error => {
                callback([], error);
            });
        }
        else {
            callback([], {message: "to nie liczba", type: 400});
        }
    },
    callbackMeAddOne(name, callback){
        const joined = Date.now();
        addOne(name, joined).then((user) => {
            callback(user);
        })
    }
};
async function getAll() {
    return await databaseConnector.getDatabaseKeys('users:*').then((list) => {
        const promises = list.map(key => {
            return databaseConnector.getDatabaseAll(key)
                .then((user) => {
                    return {
                        id: user.id,
                        username: user.name,
                        displayName: user.name.charAt(0).toUpperCase() + user.name.slice(1),
                        twitter: '@' + user.name,
                        memberFor: (Date.now() - user.joined) + 'miliseconds'
                    };
                });
        });
        return p.all(promises);
    });
}

async function getSingleUser(userId) {
    try {
        return await  databaseConnector.getDatabaseAll(`users:${userId}`).then(result => {
            if (!result) throw  {message: "-not exist-", type: 404};
            return result;
        }).then((user) => {
            return {
                id: user.id,
                username: user.name,
                displayName: user.name.charAt(0).toUpperCase() + user.name.slice(1),
                twitter: '@' + user.name,
                memberFor: (Date.now() - user.joined) + 'miliseconds'
            }
        })
    }
    catch (err) {
        return new Promise((resolve, reject) => {

            reject(err)
        })
    }
}

async function addOne(name, joined) {
    try {
        return await redis.get('nextuser')
        .then(nextId => {
            return  p.all([
                redis.hset(`user:${nextId}`, 'id', nextId),
                redis.hset(`user:${nextId}`, 'name', name),
                redis.hset(`user:${nextId}`, 'joined', joined),
                redis.set('nextuser', nextId++)
            ]).then(() => {
                return {
                    id: nextId,
                    username: name,
                    displayName: name.charAt(0).toUpperCase() + name.slice(1),
                    twitter: '@' + name,
                    memberFor: (Date.now() - joined) + 'miliseconds'
                }
            })
        });

    }
    catch (err) {
        return new Promise((resolve, reject) => {

            reject(err)
        })

    }
}