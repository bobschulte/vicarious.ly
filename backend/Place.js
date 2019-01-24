'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    arrival: { type: DataTypes.DATE, allowNull: false },
    departure: { type: DataTypes.DATE, defaultValue: null },
  }, {});
  Place.associate = function(db) {
    Place.belongsTo(db.Stay)
  };
  return Place;
};

// {
//   formatted_address: 'Cl. 30 #20-192, Cartagena, Bolívar, Colombia',
//     geometry:
//   {
//     location: { lat: 10.42349, lng: -75.55315 },
//     viewport: { northeast: [Object], southwest: [Object] }
//   },
//   name: 'Restaurante Bar La Vitrola',
//     types:
//   ['restaurant',
//     'bar',
//     'point_of_interest',
//     'food',
//     'establishment'],
//     url: 'https://maps.google.com/?cid=16899653682543235191',
//       StayId: 'ae7d135f-ccfb-48f1-a0a4-485021c78768',
//         placeType: 'food-drink'
// }