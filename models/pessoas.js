'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    static associate(models) {
      Pessoas.hasOne(models.Times, {
        foreignKey: 'jogador_id'
      }),
      Pessoas.belongsTo(models.Esportes, {
        foreignKey: 'id_esporte'
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    status: DataTypes.STRING,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
  });
  return Pessoas;
};