// === action types
export const DEL_USER = 'DEL_USER';

// === action creators
export const delUser = (newValue, identifier) => ({
  type: DEL_USER,
  newValue: newValue,
  identifier: identifier,
});
