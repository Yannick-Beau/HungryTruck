// === action types
export const ADD_FOODTRUCK = 'ADD_FOODTRUCK';

// === action creators
export const newFoodTruck = (newValue, identifier) => ({
  type: ADD_FOODTRUCK,
  newValue: newValue,
  identifier: identifier,
});
