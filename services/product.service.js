const {product} = require('../models')   // Import user model
const {saveImage} = require('../helpers/saveImage.helper') // Import saveImage helper
const { deleteImageHelper } = require("../helpers/deleteImage.helper")

exports.getAllProduct = async (req, res) => {

    const data = await product.findAll()

    return {
        status: 200,
        data,
        message: "Success Get All Data"
    }
} 

exports.getDetailProduct = async (req, res) => {
    const {id} = req.params

    const data = await product.findOne({where: {id}})

    if(!data){
        return {
            status: 404,
            message: "Data Not Found"
        }
    }

    return {
        status: 200,
        data,
        message: "Success Get Detail Data"
    }
}

// exports.createProduct = async (req, res) => {
//     const { username, nama_lengkap, email, password, role } = req.body;
//     const slug = username.toLowerCase().split(' ').join('-')

//     const imageFilePath = await saveImage(req.files.image,slug, "user")
//     const data = await user.create({
//         username,
//         nama_lengkap,
//         email,
//         password,
//         image: imageFilePath,
//         role
//     });

//     return {
//         status: 201,
//         data: req.body,
//         message: "Success Create Data"
//     }
// }

exports.createProduct = async (req, res) => {
  const {name,description, price, image} = req.body
  const slug = name.toLowerCase().split(' ').join('-')

  const imageFilePath = await saveImage(req.files.image,slug, "product")

  const data = await product.create({name, description, price, image: imageFilePath})

  return {
      status: 201,
      data: req.body,
      message: "Success Create Data"
  }
}

exports.editProduct = async(req, res) => {
  const {id} = req.params
  const data = product.findOne({where: {id}})

  if (!data){
      return{
          status: 404,
          message: 'Data not Found'
      }
  }

  const {name, description, price} = req.body 
  const slug = name.toLowerCase().split(' ').join('-')
  deleteImageHelper(data.image)

  const imageFilePath = await saveImage(req.files.image,slug, "product")

  await product.update({name, description, price, image: imageFilePath}, {where:{id}})

  return{
      status: 200,
      data: req.body,
      message: 'Success update data'
  }
}

exports.deleteProduct = async (req,res) => {
    const {id} = req.params
    const data = await product.findOne({where:{id}})

    if (!data) {
        return{
            status: 404,
            message: 'data not found'
        }
    }

    deleteImageHelper(data.image)

    await product.destroy({where:{id}})

    return {
        status: 200,
        message: "success delete product"
    }
}
