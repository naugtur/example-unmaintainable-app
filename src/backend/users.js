const router = require('express').Router();

router.get('/users', (req, res) => {
    req.app.get('UsersService').callbackMeTheListing((result, err) => {
        req.app.get('ErrorHandler').returnResponse(result, err, res);
    });
});

router.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    req.app.get('UsersService').callbackMeTheOne(userId, (result, err) => {
        req.app.get('ErrorHandler').returnResponse(result, err, res);
    });

});

router.post('/users', (req, res) => {
    const name = req.body.name;
    req.app.get('UsersService').callbackMeAddOne(name, (result, err) => {
        req.app.get('ErrorHandler').returnResponse(result, err, res);
    })
});

module.exports = router;