'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partidas extends Model {
    static associate(models) {
      Partidas.belongsTo(models.Times, {
        foreignKey: 'idtimecasa_part'
      }),
      Partidas.belongsTo(models.Times, {
        foreignKey: 'idtimefora_part'
      }),
      Partidas.belongsTo(models.Esportes, {
        foreignKey: 'id_esporte'
      })
    }
  }
  Partidas.init({
    local_part: DataTypes.STRING,
    data_part: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Partidas',
  });
  return Partidas;
};