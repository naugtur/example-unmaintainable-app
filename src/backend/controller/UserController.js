const userFindingService = require('./../service/UserFindingService')
const userSavingService = require('./../service/UserSavingService')


module.exports = {
    findAll(req,res) {
        userFindingService.findAll()
            .then(results => {
                res.json(results)
            })
            .catch(err=> {
                res.status(500).json(err.message)
            })

    },
    findOne(req, res) {
        const userId = req.params.userId
        userFindingService.findOne(userId)
            .then(result => {
                res.json(result)
            })
            .catch(err=> {
                res.status(500).json(err.message)
            })

    },
    saveOne(req, res) {
        const name = req.body.name
        userSavingService.saveOne(name)
            .then(user =>
                res.status(201).json(user)
            )
            .catch(err=> {
                res.status(500).json(err.message)
            })
    },
}
