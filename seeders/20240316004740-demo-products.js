'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: "Baju Merah",
        price: 100000,
        description: "Pakaian baju merah yang nyaman dan stylish",
        image: "/images/product/bajumerah.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kemeja Putih",
        price: 250000,
        description: "Kemeja Putih bagus untuk acara formal",
        image: "/images/product/kemejaputih.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Celana Jeans",
        price: 200000,
        description: "Celana jeans dengan bahan yang nyaman dan tahan lama",
        image: "/images/product/celanajeans.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jas Hitam",
        price: 1400000,
        description: "Jas hitam yang bagus untuk acara formal",
        image: "/images/product/jashitam.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Baju biru",
        price: 99000,
        description: "Baju biru yang nyaman dan stylish",
        image: "/images/product/bajubiru.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
