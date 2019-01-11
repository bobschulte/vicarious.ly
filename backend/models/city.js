'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Stay)
  };
  return City;
};