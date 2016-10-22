const router = require('express').Router();

router.get('/users', (req, res) => {
    req.app.get('DatabaseConnector').promiseMeTheListing()
        .then(results => {
            res.json(results);
        });

});

module.exports = router;