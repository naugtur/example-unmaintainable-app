const User = require('../../src/backend/user');

describe('user', () => {

    it('should return array and user', () => {

        let user = new User({});
        user.prepareToInsert((keys, value) => {
            ['name', 'joined'].should.eql(keys);
            value.should.eql(user);
        })

    })


})