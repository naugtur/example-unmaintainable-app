const router = require('express').Router();

router.get('/users', (req, res) => {
    req.app.get('DatabaseConnector').callbackMeTheListing((result, err) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
            res.json(result);
        }
    });
});

router.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    req.app.get('DatabaseConnector').callbackMeTheOne(userId, (result, err) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
            res.json(result);
        }
    });

});

module.exports = router;