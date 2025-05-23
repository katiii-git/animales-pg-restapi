'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Animal.init({
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    habitat: DataTypes.STRING,
    diet: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};