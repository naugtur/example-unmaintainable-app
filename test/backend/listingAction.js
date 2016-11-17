const listingAction = require('../../src/backend/listingAction')

describe('listingAction', () => {

    it('should return a list', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
            result.should.be.Array()
        })
    })

    it('id should be a number', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
          for (var i = 0; i < result.length; i++) {
            (isNaN(result[0].id)).should.be.equal(false)
          }
        })
    })

    it('username should be a string', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
          for (var i = 0; i < result.length; i++) {
            result[0].twitter.should.be.type('string')
          }
        })
    })


    it('should return a list of users with twitter handles', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
          for (var i = 0; i < result.length; i++) {
            result[0].twitter.should.be.type('string')
            result[0].twitter[0].should.be.equal('@')
          }
        })
    })


    it('should return a list of users with twitter handles', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
          for (var i = 0; i < result.length; i++) {
            result[0].twitter.should.be.type('string')
            result[0].twitter[0].should.be.equal('@')
          }
        })
    })

    it('memeberFor should have xxxxxmiliseconds format', () => {
        return listingAction.promiseMeTheListing()
        .then(result => {
          for (var i = 0; i < result.length; i++) {
            result[0].memberFor.slice(-11).should.be.equal('miliseconds');
            (isNaN(result[0].memberFor.slice(0,-11))).should.be.equal(false)
          }

        })
    })

})
