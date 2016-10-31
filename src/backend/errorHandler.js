module.exports = {

    returnResponse(result, err, res) {
        if (err) {
            switch (err.type) {
            case 404:
                res.status(404).json({
                    error: 'not exist'
                });
                break;
            case 400:
                res.status(400).json({
                    error: 'invalid parameters'
                });
                break;
            default:
                res.status(500).json({
                    error: err.message
                });
            }
        } else {
            res.json(result);
        }
    }

};