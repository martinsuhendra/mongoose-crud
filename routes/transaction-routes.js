const router = require('express').Router()
const transactionController = require('../controllers/transaction-controller')

router.get('/', transactionController.findAll)
router.get('/search', transactionController.findAll)
router.get('/:id', transactionController.findOne)
router.post('/', transactionController.create)
router.delete('/:id',transactionController.delete)
router.put('/:id',transactionController.update)
router.patch('/:id',transactionController.updateOne)

module.exports = router