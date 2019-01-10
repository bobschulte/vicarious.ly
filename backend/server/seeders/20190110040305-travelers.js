'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Travelers',[
      {
        firstName: 'Robert',
        lastName: 'Schulte',
        location: 'Bogotá',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Dawson',
        lastName: 'Lewis',
        location: 'Hong Kong',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Milam',
        lastName: 'Miller',
        location: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Travelers', null, {});
  }
};
