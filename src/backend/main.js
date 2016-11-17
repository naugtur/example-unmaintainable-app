const redis = require('./redis')
const bluebird = require('bluebird')

const listingAction = require('./listingAction')
const userActions = require('./user')

module.exports = {
    list(req, res) {
        listingAction.promiseMeTheListing()
            .then(results => {
                res.json(results)
            })
    },
    getOne(req, res) {
        const userId = req.params.userId
        redis.hgetall(`users:${userId}`)
            .then((user) => (
                 userActions.userInfo(user)
            )).then(result => {
                res.json(result)
            })
    },
    addOne(req, res) {
        const name = req.body.name
        const joined = Date.now()
        redis.get('nextuser')
            .then(nextId => {
                bluebird.all([
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
                    })
                })
            })
    },
}
