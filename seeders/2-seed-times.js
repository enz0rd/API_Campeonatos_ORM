'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    return queryInterface.bulkInsert('Times', [
    {
      nome_time: "Lions",
      treinador_time: "Jonathan",
      time_esporte: 1,
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      nome_time: "Tigers",
      treinador_time: "Cíntia",
      time_esporte: 2,
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      nome_time: "Snakes",
      treinador_time: "Pedro",
      time_esporte: 5,
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      nome_time: "Bulls",
      treinador_time: "Jhonson",
      time_esporte: 1,
      updatedAt: new Date(),
      createdAt: new Date()
    },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
