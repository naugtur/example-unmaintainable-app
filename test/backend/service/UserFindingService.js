//require some sources to produce a coverage report at all...
const userFindingService = require('../../../src/backend/service/UserFindingService')

describe('userFindingService', () => {

    it('should return a result of type array', () => {
        return userFindingService.findAll()
            .then(
                result => {
                    result.should.be.Array()

                })
    })
    it('should return a correct number users', () => {
        return userFindingService.findAll()
            .then(
                result => {
                    result.should.have.lengthOf(2)
                })
    })
    it('should return a users with right properties', () => {
        return userFindingService.findAll()
            .then(
                result => {
                    result[0].should.have.properties({
                        id: '1',
                        username: 'john',
                        displayName: 'John',
                        twitter: '@john'
                    })
                    result[1].should.have.properties({
                        id: '2',
                        username: 'tim',
                        displayName: 'Tim',
                        twitter: '@tim',
                    })

                })
    })
    it('should return a single user with an id', ()=> {
        return userFindingService.findOne(1)
            .then(
                user=>user.id.should.be.exactly('1')
            )
    })
    it('should return a user with right properties', ()=> {
        return userFindingService.findOne(1)
            .then(
                user=>user.should.have.properties({
                    id: '1',
                    username: 'john',
                    displayName: 'John',
                    twitter: '@john'
                })
            )
    })
})
