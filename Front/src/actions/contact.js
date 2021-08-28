// === action types
export const CONTACT_US = 'CONTACT_US';

// === action creators
export const delUser = (newValue, identifier) => ({
  type: CONTACT_US,
  newValue: newValue,
  identifier: identifier,
});
