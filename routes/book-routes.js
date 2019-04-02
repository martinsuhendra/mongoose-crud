const router = require('express').Router()
const bookController = require('../controllers/book-controller')

router.get('/', bookController.findAll)
router.get('/search', bookController.findAll)

router.post('/', bookController.create)

router.delete('/:id',bookController.delete)

router.put('/:id',bookController.update)

router.patch('/:id',bookController.updateOne)

module.exports = router