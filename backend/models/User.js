'use strict';

const sequelizeTransforms = require('sequelize-transforms')
const passportLocalSequelize = require('passport-local-sequelize')
const md5 = require('md5')

module.exports = (sequelize, DataTypes) => {
  sequelizeTransforms(sequelize)
  const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, lowercase: true, trim: true, validate: { isEmail: true } },
    passwordHash: DataTypes.TEXT,
    passwordSalt: DataTypes.TEXT,
    firstName: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: false, trim: true }
  }, {
    getterMethods: {
      name() {
        return this.firstName + ' ' + this.lastName
      },
      location() {
        if (this.Stays.length > 0) {
          let currentStay = this.Stays.find(stay => stay.departure === null)
          if (currentStay) return currentStay.City.nameWithCountry
          return null
        } else {
          return null
        }
      },
      userIdSlug() {
        let slugFirstName = this.firstName.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
        let slugLastName = this.lastName.split(' ').join('-').replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase()
        return [slugFirstName, slugLastName, this.id.slice(0, 3)].join('-')
      },
      gravatar() {
        const hash = md5(this.email);
        return `https://gravatar.com/avatar/${hash}?s=200`;
      }
    }
  });
  User.associate = function(db) {
    User.hasMany(db.Stay)
    User.belongsToMany(db.City, { through: db.Stay })
  };

  passportLocalSequelize.attachToUser(User, { usernameField: 'email', hashField: 'passwordHash', saltField: 'passwordSalt' });
  
  // consider an error handler library here

  return User;
};