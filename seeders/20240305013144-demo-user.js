'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin1',
        nama_lengkap: 'Admin One',
        email: 'admin1@example.com',
        foto_profil: 'profile1.jpg',
        password: 'password1',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        nama_lengkap: 'User Two',
        email: 'user2@example.com',
        foto_profil: 'profile2.jpg',
        password: 'password2',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        nama_lengkap: 'User Three',
        email: 'user3@example.com',
        foto_profil: 'profile3.jpg',
        password: 'password3',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user4',
        nama_lengkap: 'User Four',
        email: 'user4@example.com',
        foto_profil: 'profile4.jpg',
        password: 'password4',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user5',
        nama_lengkap: 'User Five',
        email: 'user5@example.com',
        foto_profil: 'profile5.jpg',
        password: 'password5',
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};