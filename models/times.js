'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Times extends Model {
    static associate(models) {
      Times.hasMany(models.Pessoas, {
        foreignKey: 'id_time'
      }),
      Times.hasMany(models.Partidas, {
        foreignKey: 'idtimecasa_part'
      }),
      Times.hasMany(models.Partidas, {
        foreignKey: 'idtimefora_part'
      }),
      Times.belongsTo(models.Esportes, {
        foreignKey: 'time_esporte'
      })
    }
  }
  Times.init({
    nome_time: DataTypes.STRING,
    treinador_time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Times',
  });
  return Times;
};