var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')
var multer = require('multer')

const upload = multer({ dest: '../images/' })


router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.deleteUser)
router.get('/:id', userController.getDetailUser)

module.exports = router;  