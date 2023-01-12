'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Partidas', [
      {
        local_part: 'Estádio Lions',
        data_part: '2023-16-02 18:30',
        idtimecasa_part: 1,
        idtimefora_part: 2,
        id_esporte: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      local_part: 'Estádio Snakes',
      data_part: '2023-03-12 18:30',
      idtimecasa_part: 3,
      idtimefora_part: 4,
      id_esporte: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      local_part: 'Estádio Bulls',
      data_part: '2023-10-07 18:30',
      idtimecasa_part: 4,
      idtimefora_part: 2,
      id_esporte: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      local_part: 'Estádio Tigers',
      data_part: '2023-15-03 18:30',
      idtimecasa_part: 2,
      idtimefora_part: 3,
      id_esporte: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
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
