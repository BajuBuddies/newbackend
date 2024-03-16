const checkoutService = require('../services/checkout.service')

exports.checkoutProductController = async (req, res) => {
    const result = await checkoutService.createCheckoutProduct(req, res)
    return res.status(result.status).json(result)
}