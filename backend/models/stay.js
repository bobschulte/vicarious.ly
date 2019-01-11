'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    arrival: DataTypes.DATE,
    departure: DataTypes.DATE,
    CityId: DataTypes.INTEGER,
    TravelerId: DataTypes.INTEGER
  }, {});
  Stay.associate = function(models) {
    Stay.belongsTo(models.Traveler);
    Stay.belongsTo(models.City);
  };
  return Stay;
};