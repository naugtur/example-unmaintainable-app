/**
 * Created by dziadeusz on 12.11.16.
 */
const redis = require('./../storage/redis')
const bluebird = require('bluebird')
const helper = require('./helper/UserPropertiesHelper')

module.exports = {
    saveOne(userName){
        const joined = Date.now()
        return redis.get('nextuser')
            .then(nextId => {
                return bluebird.all([
                    redis.hset(`user:${nextId}`, 'id', nextId),
                    redis.hset(`user:${nextId}`, 'name', userName),
                    redis.hset(`user:${nextId}`, 'joined', joined),
                    redis.set('nextuser', nextId++)
                ]).then(() => {
                    return {
                        id: nextId,
                        username: userName,
                        displayName: helper.getDisplayName(userName),
                        twitter: helper.getTwitterName(userName),
                        memberFor: helper.getMembershipTime(joined)
                    }
                })
            })
    }
}