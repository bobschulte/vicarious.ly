'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false }
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Stay)
    City.belongsToMany(models.User, { through: models.Stay });
  };
  return City;
};