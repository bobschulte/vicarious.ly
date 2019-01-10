'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Stay)
  };
  return City;
};