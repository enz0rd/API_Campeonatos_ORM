'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pessoas', [
      {
      nome: "João da Silva",
      status: 'Ativo',
      id_esporte: 1,
      id_time: 1,
      cpf: '05545621347',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "João de Andrade",
      status: 'Afastado',
      id_esporte: 5,
      id_time: 2,
      cpf: '05545621347',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "João da Silva",
      status: 'Ativo',
      id_esporte: 2,
      id_time: 3,
      cpf: '05545621347',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Júlia de Moraes",
      status: 'Ativo',
      id_esporte: 4,
      id_time: 4,
      cpf: '15647854256',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Jhonatan Silveira",
      status: 'Ativo',
      id_esporte: 3,
      id_time: 1,
      cpf: '46587212354',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Andréia de Souza",
      status: 'Ativo',
      id_esporte: 4,
      id_time: 2,
      cpf: '54987632154',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "André Schwarzenneger",
      status: 'Ativo',
      id_esporte: 1,
      id_time: 3,
      cpf: '45785421356',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Jocie Tadeu da Rosa",
      status: 'Ativo',
      id_esporte: 1,
      id_time: 4,
      cpf: '55647822354',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Cleiton da Silva",
      status: 'Ativo',
      id_esporte: 2,
      id_time: 1,
      cpf: '45423577895',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: "Silvester Estállone",
      status: 'Ativo',
      id_esporte: 5,
      id_time: 2,
      cpf: '34712386489',
      createdAt: new Date(),
      updatedAt: new Date()
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
