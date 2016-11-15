/**
 * Created by dziadeusz on 13.11.16.
 */
const userSavingService = require('../../../src/backend/service/UserSavingService')
const redis = require('../../../src/backend/storage/redis')
const propertiesHelper = require('../../../src/backend/service/helper/UserPropertiesHelper')
const bluebird = require('bluebird');

describe('userSavingService', ()=> {

    it("should save a new user and return it with id", ()=> {
        //given
        var expectedUserName = "tom"
        var beforeTestStorageState = redis.keys('users:*')
            .then(keys=> {
                var userPromises = keys.map(key=> {
                    redis.hgetall(key)
                })
                return bluebird.all(userPromises)
            }).resolve();

        //when
        return userSavingService.saveOne(expectedUserName).then(user=> {
            user.id.should.not.be.null
            user.memberFor.should.not.be.null
            user.should.have.properties({
                "username": expectedUserName,
                "displayName": propertiesHelper.getDisplayName(expectedUserName),
                "twitter": propertiesHelper.getTwitterName(expectedUserName),
            });
        })
    })

})