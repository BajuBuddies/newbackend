var express = require('express');
var router = express.Router();

const productController = require('../controllers/product.controller')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getDetailProducts)
router.post('/', productController.createProduct)
router.delete('/:id', productController.deleteProduct)
router.put('/:id', productController.editProduct)

module.exports = router;