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

    it('should return a single user with twitter handles', () => {
        return listingAction.callbackMeTheOne(1, ((result, err) => {
            result.twitter.should.be.type('string')

        }))
    })

    it('should return its not number error', () => {
        return listingAction.callbackMeTheOne('asdas', ((result, err) => {
            err.message.should.be.type('string');
            err.type.should.be.type('number');
            err.message.should.eql('to nie liczba');
        }))
    })

    it('should return its not found', () => {
        return listingAction.callbackMeTheOne(4, ((result, err) => {
            err.message.should.be.type('string');
            err.type.should.be.type('number');
            err.type.should.eql(404);
        }))
    })

    it('should return add new', () => {
        return listingAction.callbackMeAddOne('ktos', ((result, err) => {
            result.id.should.be.type('number');
            result.username.should.be.type('string');
            result.displayName.should.be.type('string');
            result.twitter.should.be.type('string');
            result.memberFor.should.be.type('string');
        }))
    })
});