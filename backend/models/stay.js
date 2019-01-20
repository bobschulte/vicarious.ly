'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    arrival: { type: DataTypes.DATE, allowNull: false },
    departure: { type: DataTypes.DATE, defaultValue: null },
  }, {});
  Stay.associate = function(db) {
    Stay.belongsTo(db.User);
    Stay.belongsTo(db.City);
  };
  return Stay;
};