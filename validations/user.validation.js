const joi = require('joi')

exports.validateAddUser = (user) => {
  const schema = joi.object({
    nama_lengkap: joi.string().required(),
    username: joi.string().min(3).required(),
    password: joi.string().required(),
    email: joi.string().required(),
    role: joi.string().required(),
  })

  return schema.validate(user)
}

exports.validateEditUser = (user) => {
  const schema = joi.object({
    nama_lengkap: joi.string().required(),
    username: joi.string().min(3).required(),
    password: joi.string().required(),
    email: joi.string().required(),
    role: joi.string().required(),
  })

  return schema.validate(user)
}


// exports.validateAddUser = (users) => {
//     const schema = joi.object({
//       username: joi.string().min(3).required(),
//       password: joi.string().min(8).required(),
//       email: joi.string().email().required()
//     })
//     return schema.validate(users)
//   }