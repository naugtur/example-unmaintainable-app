const errorHandler = require('../../src/backend/errorHandler');

describe('errorHandler', () => {

    const res = { // mock response
        response: {},
        code: 200,
        json: function json(result) {
            this.response = result;
        },
        status: function status(status) {
            this.code = status;
            return this;
        }
    };

    it('should have return response', () => {
        errorHandler.returnResponse({foo: "bar"}, null, res);
        res.response.should.eql({foo: "bar"});
        res.code.should.eql(200);
    });

    it('should have return error 404', () => {
        errorHandler.returnResponse(null, {type: 404, message: "not found"}, res);
        res.response.should.eql({error: "not exist"});
        res.code.should.eql(404);
    });

    it('should have return error 400', () => {
        errorHandler.returnResponse(null, {type: 400, message: "nie wlasciwe parametry"}, res);
        res.response.should.eql({error: "invalid parameters"});
        res.code.should.eql(400);
    });

    it('should have return error 500', () => {
        errorHandler.returnResponse(null, {type: 1000000, message: "tutaj sie nie kompiluje"}, res);
        res.code.should.eql(500);
    });

});