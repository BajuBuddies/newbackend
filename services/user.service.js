const {user} = require('../models')   
const {deleteImageHelper} = require('../helpers/deleteImage.helper')
const {validateAddUser, validateEditUser} = require('../validations/user.validation')
const {saveImage} = require('../helpers/saveImage.helper')

exports.getAllUsers = async (req, res) => {

    const data = await user.findAll()

    return {
        status: 200,
        data,
        message: "Success Get All Data"
    }
} 

exports.getDetailUser = async (req, res) => {
    const {id} = req.params

    const data = await user.findOne({where: {id}})

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

// Create user function 
exports.createUsers = async (req, res) => {
    try {
        const {username, nama_lengkap, email, password, role} = req.body
        if (!username || !nama_lengkap || !email || !password || !role) {
            throw new Error('Missing required fields')
        }

        const foto_profil = req.files.foto_profil
        if (!foto_profil) {
            throw new Error('Missing profile picture')
        }

        const slug = username.toLowerCase().split(' ').join('-')

        const imageFilePath = await saveImage(req.files.foto_profil,slug, "user")
        if (!imageFilePath) {
            throw new Error('Error saving image')
        }

        const data = await user.create({username, nama_lengkap, email, password, foto_profile: imageFilePath, role})
        if (!data) {
            throw new Error('Error creating user')
        }

        return {
            status: 201,
            data,
            message: "Success Create Data"
        }
    } catch (error) {
        return {
            status: 404,
            message: error.message
        }
    }
}
