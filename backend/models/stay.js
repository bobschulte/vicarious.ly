'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    arrival: DataTypes.DATE,
    departure: DataTypes.DATE,
    CityId: DataTypes.UUID,
    TravelerId: DataTypes.UUID
  }, {});
  Stay.associate = function(models) {
    Stay.belongsTo(models.Traveler);
    Stay.belongsTo(models.City);
  };
  return Stay;
};