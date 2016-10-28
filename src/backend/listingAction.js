const p = require('bluebird');
const databaseConnector = require('./databaseConnector');

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