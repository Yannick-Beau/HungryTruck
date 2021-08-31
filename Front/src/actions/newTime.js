// === action types
export const NEW_TIME = 'NEW_TIME';
export const ADD_EVENT = 'ADD_EVENT';

// === action creators

export const newTime = (newValue, identifier) => ({
  type: NEW_TIME,
  newValue: newValue,
  identifier: identifier,
});

export const addEvent = () => ({
  type: ADD_EVENT,
});
