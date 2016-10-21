const redis = require('./redis')
const p = require('bluebird')

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
                  }
              })
      })
      return shit
      return p.all(promises)
      })
}
}
