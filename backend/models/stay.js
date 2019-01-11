'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    arrival: { type: DataTypes.DATE, allowNull: false },
    departure: { type: DataTypes.DATE, defaultValue: null },
    CityId: { type: DataTypes.UUID, allowNull: false },
    TravelerId: { type: DataTypes.UUID, allowNull: false }
  }, {});
  Stay.associate = function(models) {
    Stay.belongsTo(models.Traveler);
    Stay.belongsTo(models.City);
  };
  return Stay;
};