'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin1',
        nama_lengkap: 'Admin One',
        email: 'admin1@example.com',
        image: 'profile1.jpg',
        password: '$2a$12$MiH4Hy51vZbdzQHaGhDEZ.q9j1CegWMTKEn4iExUCvZZS/p.a8HQO', // password1
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        nama_lengkap: 'User Two',
        email: 'user2@example.com',
        image: 'profile2.jpg',
        password: '$2a$12$/OAIsz3PeAz52/qOZBrXUun4lgFBz0yCgzM/A0RwLkwH89L2x/bSe', //password2
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user3',
        nama_lengkap: 'User Three',
        email: 'user3@example.com',
        image: 'profile3.jpg',
        password: '$2a$12$HyFm1bfWqOi9IKatjrCjheKcWCSWM5k7HCGwcdFW5Hv8zxz7GR1cq', //password3
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user4',
        nama_lengkap: 'User Four',
        email: 'user4@example.com',
        image: 'profile4.jpg',
        password: '$2a$12$Ctnnfjy6DkUkkS1SYTIYIetZthJxECjF1bNMkbDyxkydCrTfcDkcq', //password4
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user5',
        nama_lengkap: 'User Five',
        email: 'user5@example.com',
        image: 'profile5.jpg',
        password: '$2a$12$bEu5LSpaN39dItW5q90gIepVu47HjhhJveW1JnVRPcaqfuNraR0o6', //password5
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