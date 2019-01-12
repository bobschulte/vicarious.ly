'use strict';

const sequelizeTransforms = require('sequelize-transforms')
const passportLocalSequelize = require('passport-local-sequelize')
const md5 = require('md5')

module.exports = (sequelize, DataTypes) => {
  sequelizeTransforms(sequelize)
  const User = sequelize.define('User', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true, lowercase: true, trim: true, validate: { isEmail: true } },
    firstName: { type: DataTypes.STRING, allowNull: false, trim: true },
    lastName: { type: DataTypes.STRING, allowNull: false, trim: true },
    location: {type: DataTypes.STRING, defaultValue: null, trim: true },
  }, {
    getterMethods: {
      gravatar() {
        const hash = md5(this.email);
        return `https://gravatar.com/avatar/${hash}?s=200`;
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Stay)
  };

  passportLocalSequelize.attachToUser(User, { usernameField: "email" });
  // consider an error handler library here

  return User;
};