const {user} = require('../models')   // Import user model
const {saveImage} = require('../helpers/saveImage.helper') // Import saveImage helper
const bcrypt = require('bcrypt')
const { deleteImageHelper } = require("../helpers/deleteImage.helper")

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

exports.createUser = async (req, res) => {
    const { username, nama_lengkap, email, password, role } = req.body;
    const slug = username.toLowerCase().split(' ').join('-')
    const EncryptPassword = await bcrypt.hash(password, 10)
    password = EncryptPassword

    const imageFilePath = await saveImage(req.files.image,slug, "user")
    const data = await user.create({
        username,
        nama_lengkap,
        email,
        password,
        image: imageFilePath,
        role
    });

    return {
        status: 201,
        data: req.body,
        message: "Success Create Data"
    }
}


exports.editUser = async(req, res) => {
    const {id} = req.params
    const data = user.findOne({where: {id}})

    if (!data){
        return{
            status: 404,
            message: 'Data not Found'
        }
    }

    const { username, nama_lengkap, email, password, role } = req.body;
    const slug = username.toLowerCase().split(' ').join('-')
    deleteImageHelper(data.image)

    const imageFilePath = await saveImage(req.files.image,slug, "user")

    await user.update({
        username,
        nama_lengkap,
        email,
        password,
        image: imageFilePath,
        role
    }, {where: {id}});
    // await product.update({name, description, price, image: imageFilePath}, {where:{id}})

    return{
        status: 200,
        data: req.body,
        message: 'Success update data'
    }
}


exports.deleteUser = async (req,res) => {
    const {id} = req.params
    const data = await user.findOne({where:{id}})

    if (!data) {
        return{
            status: 404,
            message: 'data not found'
        }
    }

    deleteImageHelper(data.image)

    await user.destroy({where:{id}})

    return {
        status: 200,
        message: "success delete user"
    }
}

// Create user function 
// exports.createUser = async (req, res) => {  
//     const {username, nama_lengkap, email, password, role} = req.body
//     const slug = username.toLowerCase().split(' ').join('-')

//     const imageFilePath = await saveImage(req.files.image, slug, "user")

//     const data = await products.create({username, nama_lengkap, email, password, image: imageFilePath, role})

//     return {
//         status: 201,
//         data,
//         message: "Success Create Data"
//     }
//     try {
//         const {username, nama_lengkap, email, password, role} = req.body
//         if (!username || !nama_lengkap || !email || !password || !role) {
//             throw new Error('Missing required fields')
//         }

//         const image = req.files.image
//         if (!image) {
//             throw new Error('Missing profile picture')
//         }

//         const slug = username.toLowerCase().split(' ').join('-')

//         const imageFilePath = await saveImage(req.files.image,slug, "user")
//         if (!imageFilePath) {
//             throw new Error('Error saving image')
//         }

//         const data = await user.create({username, nama_lengkap, email, password, image: imageFilePath, role})
//         if (!data) {
//             throw new Error('Error creating user')
//         }

//         return {
//             status: 201,
//             data,
//             message: "Success Create Data"
//         }
//     } catch (error) {
//         return {
//             status: 404,
//             message: error.message
//         }
//     }
// }


// exports.createUser = async (req, res) => {
//     try {
//         const { username, nama_lengkap, email, password, role } = req.body;
//         if (!username || !nama_lengkap || !email || !password || !role) {
//             throw new Error('Missing required fields');
//         }

//         const image = req.file; // Access uploaded file through req.file

//         if (!image) {
//             throw new Error('Missing profile picture');
//         }

//         const slug = username.toLowerCase().split(' ').join('-');

//         // Assuming Multer middleware saves the file to disk storage
//         const imageFilePath = '' + image.filename; // Construct file path

//         const data = await user.create({
//             username,
//             nama_lengkap,
//             email,
//             password,
//             image: imageFilePath, // Save file path to database
//             role
//         });

//         return res.status(201).json({
//             status: 201,
//             data,
//             message: 'Success Create Data'
//         });
//     } catch (error) {
//         return res.status(404).json({
//             status: 404,
//             message: error.message
//         });
//     }
// };

// const fs = require('fs');
// const path = require('path');

// exports.createUser = async (req, res) => {
//     try {
//         const { username, nama_lengkap, email, password, role } = req.body;
//         if (!username || !nama_lengkap || !email || !password || !role) {
//             throw new Error('Missing required fields');
//         }

//         const image = req.files.image; // Access uploaded file through req.files.image

//         if (!image) {
//             throw new Error('Missing profile picture');
//         }

//         const slug = username.toLowerCase().split(' ').join('-');
//         const imageFileName = slug + '.jpg';
//         const imagePath = path.join(__dirname, '..', 'public', 'images', 'user', imageFileName);

//         // Move the uploaded file to the desired location
//         fs.writeFileSync(imagePath, image.data);

//         // Save the file path to the database
//         const imageFilePath = '/images/user/' + imageFileName;

//         const data = await user.create({
//             username,
//             nama_lengkap,
//             email,
//             password,
//             image: imageFilePath, // Save file path to database
//             role
//         });

//         return res.status(201).json({
//             status: 201,
//             data,
//             message: 'Success Create Data'
//         });
//     } catch (error) {
//         return res.status(400).json({
//             status: 400,
//             message: error.message
//         });
//     }
// };
