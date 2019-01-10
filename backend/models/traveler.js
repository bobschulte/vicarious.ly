'use strict';
module.exports = (sequelize, DataTypes) => {
  const Traveler = sequelize.define('Traveler', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Traveler.associate = function(models) {
    Traveler.hasMany(models.Stay)
  };
  return Traveler;
};