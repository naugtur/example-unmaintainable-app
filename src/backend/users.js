const router = require('express').Router();
const errorHandler = require('./errorHandler');

router.get('/users', (req, res) => {
    req.app.get('UsersService').callbackMeTheListing((result, err) => {
        errorHandler.returnResponse(result, err, res);
    });
});

router.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    req.app.get('UsersService').callbackMeTheOne(userId, (result, err) => {
        errorHandler.returnResponse(result, err, res);
    });

});

module.exports = router;