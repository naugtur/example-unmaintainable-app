const p = require('bluebird');
const databaseConnector = require('./databaseConnector');
const User = require('./user');

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
                    return new User({
                        id: user.id,
                        name: user.name,
                        joined: user.joined
                    }).display();
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
            return new User({
                id: user.id,
                name: user.name,
                joined: user.joined
            }).display();
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
        let user = new User({
            name: name,
            joined: joined
        });

        return await databaseConnector.setDataToDataBase(user,'user')
            .then((user) => {
                return new User({
                    id: user.id,
                    name: user.name,
                    joined: user.joined
                }).display();
            })
    }
    catch (err) {
        return new Promise((resolve, reject) => {

            reject(err)
        })

    }
}