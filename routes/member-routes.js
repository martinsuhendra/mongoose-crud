const router = require('express').Router()
const memberController = require('../controllers/member-controller')

router.get('/', memberController.findAll)
router.post('/', memberController.create)
router.delete('/:id',memberController.delete)
router.put('/:id',memberController.update)
router.patch('/:id',memberController.updateOne)

module.exports = router