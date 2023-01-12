'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Esportes', [
    {
      descr_esp: 'Basquete',
      min_idade: 15,
      createdAt: new Date(),
			updatedAt: new Date()
    },
    {
      descr_esp: 'Vôlei',
      min_idade: 18,
      createdAt: new Date(),
			updatedAt: new Date()
    },
    {
      descr_esp: 'Futebol',
      min_idade: 16,
      createdAt: new Date(),
			updatedAt: new Date()
    },
    {
      descr_esp: 'Futsal',
      min_idade: 12,
      createdAt: new Date(),
			updatedAt: new Date()
    },
    {
      descr_esp: 'Tênis',
      min_idade: 20,
      createdAt: new Date(),
			updatedAt: new Date()
    }
  ], {})
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Esportes', null, {})
  }
};
