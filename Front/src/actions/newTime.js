// === action types
export const NEW_TIME = 'NEW_TIME';
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_ADDRESS_FT = 'UPDATE_ADDRESS_FT';

// === action creators

export const newTime = (newValue, identifier) => ({
  type: NEW_TIME,
  newValue: newValue,
  identifier: identifier,
});

export const addEvent = () => ({
  type: ADD_EVENT,
});

export const updateAddress = (address, long, lat) => ({
  type: UPDATE_ADDRESS_FT,
  address: address,
  long: long,
  lat: lat,
});
