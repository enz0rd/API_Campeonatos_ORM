'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Partidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      local_part: {
        type: Sequelize.STRING
      },
      data_part: {
        type: Sequelize.STRING
      },
      idtimecasa_part: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Times', key: 'id'}
      },
      idtimefora_part: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Times', key: 'id'}
      },
      id_esporte: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Esportes', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Partidas');
  }
};