'use strict';
module.exports = (sequelize, DataTypes) => {
  const Traveler = sequelize.define('Traveler', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Traveler.associate = function(models) {
    // associations can be defined here
  };
  return Traveler;
};