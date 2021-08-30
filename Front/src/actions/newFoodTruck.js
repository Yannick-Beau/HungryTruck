// === action types
export const ADD_FOODTRUCK = 'ADD_FOODTRUCK';
export const NEW_TIME = 'NEW_TIME';

// === action creators
export const newFoodTruck = (newValue, identifier) => ({
  type: ADD_FOODTRUCK,
  newValue: newValue,
  identifier: identifier,
});

export const newTime = (newValue, identifier) => ({
  type: NEW_TIME,
  newValue: newValue,
  identifier: identifier,
});
