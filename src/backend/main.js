const redis = require('./redis')
const p = require('bluebird')
const listingAction=require('./listingAction')


module.exports = {
    list(req, res) {
      listingAction.promiseMeTheListing()
            .then(results => {
                res.json(results)
            })
            .catch(err=>{
              console.log('aaaaaaaaaaa',err)
              res.status(500).json(err.message)
            })

    },
    getOne(req, res) {
        const userId = req.params.userId
        redis.hgetall(`users:${userId}`)
            .then((user) => ({
                 id: user.id,
           username: user.name,
        displayName: user.name.charAt(0).toUpperCase() + user.name.slice(1),
            twitter: '@' + user.name,
          memberFor: (Date.now() - user.joined) + 'miliseconds'
            })).then(result => {
                res.json(result)
            })
    },
    addOne(req, res) {
        const name = req.body.name
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
                    })
                })
            })
    },
}
