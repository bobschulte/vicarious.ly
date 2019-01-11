'use strict';

const sequelizeTransforms = require('sequelize-transforms')

module.exports = (sequelize, DataTypes) => {
  sequelizeTransforms(sequelize)
  const Traveler = sequelize.define('Traveler', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, lowercase: true, trim: true, validate: { isEmail: true } },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    location: {type: DataTypes.STRING, defaultValue: null }
  }, {});
  Traveler.associate = function(models) {
    Traveler.hasMany(models.Stay)
  };
  return Traveler;
};