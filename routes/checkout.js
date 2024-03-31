var express = require('express');
var router = express.Router();
const {auth} = require('../middleware/index.middleware')
const checkoutController = require('../controllers/checkout.controller')

router.post('/', auth, checkoutController.checkoutProductController)
router.post('/notif', checkoutController.notificationController)

module.exports = router;