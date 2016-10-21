//require some sources to produce a coverage report at all...
const listingAction=require('../../src/backend/listingAction')

describe('listingAciton', () => {

    it('should return a list', () => {
        return listingAction.promiseMeTheListing()
        .then(
          result =>{
            result.should.be.Array()

          })
    })
    it('should return a list of users with twitter handles', () => {
        return listingAction.promiseMeTheListing()
        .then(
          result =>{
            result[0].twitter.should.be.type('string')

          })
    })

})
