const redis = require('./redis');
const p = require('bluebird');

const list = require('./listingAction');
module.exports = {

    addOne(req, res) {
        const name = req.body.name;
        const joined = Date.now();
        redis.get('nextuser')
            .then(nextId => {
                p.all([
                    redis.hset(`user:${nextId}`, 'id', nextId),
                    redis.hset(`user:${nextId}`, 'name', name),
                    redis.hset(`user:${nextId}`, 'joined', joined),
                    redis.set('nextuser', nextId++)
                ]).then(() => {
                    res.status(200).json({
                        id: nextId,
                        username: name,
                        displayName: name.charAt(0).toUpperCase() + name.slice(1),
                        twitter: '@' + name,
                        memberFor: (Date.now() - joined) + 'miliseconds'
                    });
                });
            });
    },
};
