export const createTraveler = traveler => {
  return {
    type: 'CREATE_TRAVELER',
    traveler
  };
};

export const relocateTraveler = travelerId => {
  return {
    type: 'RELOCATE_TRAVELER',
    travelerId: travelerId
  };
};
