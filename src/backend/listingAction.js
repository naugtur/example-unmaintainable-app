const redis = require('./redis');
const p = require('bluebird');

module.exports = {
    promiseMeTheListing(){
        return redis.keys('users:*').then((list) => {
            const promises = list.map(key => {
                return redis.hgetall(key)
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
    },
    promiseMeTheOne(userId, callback){
        return getSingleUser(userId).then(result => {
            callback(result);
        }).catch(error => {
            callback([], error);
        });

    }

};
async function getSingleUser(userId) {
    try {
        return await redis.hgetall(`users:${userId}`).then(result => {
            if (!result) throw "-not exist-";
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
        console.log('fetch failed', err);
        return new Promise((resolve, reject) => {

            reject({message: err})
        })
    }


}