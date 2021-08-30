// === action types
export const ADD_FOODTRUCK = 'ADD_FOODTRUCK';
export const NEW_FOODTRUCK = 'NEW_FOODTRUCK';
export const CHANGE_FIELD = 'CHANGE_FIELD';

// === action creators
export const changeField = (newValue, identifier) => ({
  type: CHANGE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const loadNewFoodTruck = () => ({
  type: ADD_FOODTRUCK,
});
