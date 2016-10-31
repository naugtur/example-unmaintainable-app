const listingAction = require('../../src/backend/listingAction');

describe('listingAction', () => {

    it('should return a list', () => {
        return listingAction.callbackMeTheListing((result, err) => {
            result.should.be.Array()

        })
    });

    it('should return a list of users with twitter handles', () => {
        return listingAction.callbackMeTheListing(((result, err) => {
            result[0].twitter.should.be.type('string')

        }))

    })

    it('should return a list of users with memberFor handles', () => {
        return listingAction.callbackMeTheListing(((result, err) => {
            result[0].memberFor.should.be.type('string')
        }))
    })

    it('should return a list of users with memberFor with miliseconds', () => {
        return listingAction.callbackMeTheListing(((result, err) => {
            result[0].memberFor.indexOf('miliseconds').should.not.equal(-1);
        }))
    })

    it('should return a list of users with twitter with @', () => {
        return listingAction.callbackMeTheListing(((result, err) => {
            result[0].twitter.indexOf('@').should.not.equal(-1);
        }))
    })

    it('should return a list of users with username', () => {
        return listingAction.callbackMeTheListing(((result, err) => {
            result[0].username.should.be.type('string');
        }))
    })

});