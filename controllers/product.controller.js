const product = require('../models/product')
const productService = require('../services/product.service')
const { imageValidations, fotoProfilValidations } = require('../validations/image.validation')
const {validateAddProduct, validateEditProduct} = require('../validations/product.validation')

exports.getAllProducts = async (req, res) => {

    const result = await productService.getAllProduct(req, res)

    return res.status(result.status).json(result)
}

exports.getDetailProducts = async (req, res) => {
    
    const result = await productService.getDetailProduct(req, res)

    return res.status(result.status).json(result)
}


exports.createProduct = async (req, res) => {

    let {error} = validateAddProduct(req.body)

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    let imageVal = imageValidations(req)

    if(imageVal.error){
        return res.status(400).json({
            message: imageVal.message
        })
    
    }

    const result = await productService.createProduct(req, res)

    return res.status(result.status).json(result)
}


exports.editProduct = async (req, res) => {
    let {error} = validateEditProduct(req.body)

    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    let imageVal = imageValidations(req)

    if(imageVal.error){
        return res.status(400).json({
            message: imageVal.messagex
        })
    }

    const result = await productService.editProduct(req, res)

    return res.status(result.status).json(result)
}

exports.deleteProduct = async(req, res) => {
    const result = await productService.deleteProduct(req,res)

    return res.status(result.status).json(result)
}