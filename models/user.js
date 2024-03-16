'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here
    }
  }

  user.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nama_lengkap: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    role: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'user',
  });

  return user;
};
