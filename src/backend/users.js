const router = require('express').Router();

router.get('/users', (req, res) => {
    req.app.get('DatabaseConnector').promiseMeTheListing()
        .then(results => {
            res.json(results);
        });

});

router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    req.app.get('DatabaseConnector').promiseMeTheOne(userId)
        .then(result => res.json(result));

});

module.exports = router;