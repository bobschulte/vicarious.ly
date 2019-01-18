'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    population: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    getterMethods: {
      nameWithCountry() {
        return this.name + ', ' + this.country
      },
    }
  });
  City.associate = function(db) {
    City.hasMany(db.Stay)
    City.belongsToMany(db.User, { through: db.Stay });
  };
  return City;
};