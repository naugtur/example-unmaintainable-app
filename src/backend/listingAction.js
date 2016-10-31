const p = require('bluebird');
const databaseConnector = require('./databaseConnector');
const User = require('./user');
const functionCallback = (func, callback) => {
    func.then(results => {
        callback(results);
    }).catch(error => {
        callback([], error);
    });
}
module.exports = {
    callbackMeTheListing(callback){
        functionCallback(getAll(), callback);
    },
    callbackMeTheOne(userId, callback){

        if (Number.isInteger(userId)) {
            functionCallback(getSingleUser(userId), callback);
        }
        else {
            callback([], {message: "to nie liczba", type: 400});
        }
    },
    callbackMeAddOne(name, callback){
        const joined = Date.now();
        functionCallback(addOne(name, joined), callback);
    }
};
function getAll() {
    return databaseConnector.getDatabaseKeys('users:*').then((list) => {
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

function getSingleUser(userId) {
    try {
        return databaseConnector.getDatabaseAll(`users:${userId}`).then(result => {
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

function addOne(name, joined) {
    try {
        let user = new User({
            name: name,
            joined: joined
        });

        return databaseConnector.setDataToDataBase(user, 'user')
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