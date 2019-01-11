'use strict';
module.exports = (sequelize, DataTypes) => {
  const Traveler = sequelize.define('Traveler', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Traveler.associate = function(models) {
    Traveler.hasMany(models.Stay)
  };
  return Traveler;
};