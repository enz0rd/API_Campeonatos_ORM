'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Esportes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Esportes.hasMany(models.Pessoas, {
        foreignKey: 'id_esporte'
      })
      Esportes.hasMany(models.Times, {
        foreignKey: 'time_esporte'
      })
      Esportes.hasMany(models.Partidas, {
        foreignKey: 'id_esporte'
      })
    }
  }
  Esportes.init({
    descr_esp: DataTypes.STRING,
    min_idade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Esportes',
  });
  return Esportes;
};