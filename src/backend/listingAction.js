const redis = require('./redis')
const bluebird = require('bluebird')
const userActions = require('./user')

module.exports = {
    promiseMeTheListing(){
        return redis.keys('users:*').then((list) => {
            const promises = list.map(key => {
                return redis.hgetall(key)
                    .then((user) => {
                        return userActions.userInfo(user)
                    })
            })
            return bluebird.all(promises)
        })
    }
}
