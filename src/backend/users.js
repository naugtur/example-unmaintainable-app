const router = require('express').Router();
const listingAction = require('./listingAction');

router.get('/users', (req, res) => {
    listingAction.promiseMeTheListing()
        .then(results => {
            res.json(results);
        });

});

module.exports = router;