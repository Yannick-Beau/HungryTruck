// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});
