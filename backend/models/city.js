'use strict';


module.exports = (sequelize, DataTypes) => {
  const countries = require('../seeds/countries')
  const City = sequelize.define('City', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    population: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    imgUrl: DataTypes.STRING
  }, {
    getterMethods: {
      nameWithCountry() {
        return this.name + ', ' + this.country
      },
      countryCode() {
        const countryData = countries.find(country => country["name"] === this.country)
        return countryData["alpha2"].toLowerCase()
      },
      slug() {
        let name = this.name.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
        let country = this.country.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
        return [name, country].join('-')
      }
    }
  });
  City.associate = function(db) {
    City.hasMany(db.Stay)
    City.belongsToMany(db.User, { through: db.Stay });
  };
  return City;
};