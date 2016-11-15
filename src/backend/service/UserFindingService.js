const redis = require('./../storage/redis')
const bluebird = require('bluebird')
const helper = require('./helper/UserPropertiesHelper')
module.exports = {

    findAll(){

        return redis.keys('users:*').then((list) => {
            const promises = list.map(key => {
                return redis.hgetall(key)
                    .then((user) => {
                        return {
                            id: user.id,
                            username: user.name,
                            displayName: helper.getDisplayName(user.name),
                            twitter: helper.getTwitterName(user.name),
                            memberFor: helper.getMembershipTime(user.joined)
                        }
                    })
            })
            return bluebird.all(promises)
        })
    },
    findOne(userId){
        return redis.hgetall(`users:${userId}`)
            .then((user) => ({
                id: user.id,
                username: user.name,
                displayName: helper.getDisplayName(user.name),
                twitter: helper.getTwitterName(user.name),
                memberFor: helper.getMembershipTime(user.joined)
            }))
    }
}
