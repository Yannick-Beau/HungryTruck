// === action types
export const NEW_TIME = 'NEW_TIME';
export const FIND_TRUCK = 'FIND_TRUCK';
export const SAVE_TRUCK = 'SAVE_TRUCK';

// === action creators

export const newTime = (newValue, identifier) => ({
  type: NEW_TIME,
  newValue: newValue,
  identifier: identifier,
});

export const findTruck = () => ({
  type: FIND_TRUCK,
});

export const saveTruck = (newValue) => ({
  type: SAVE_TRUCK,
  newValue: newValue,
});
