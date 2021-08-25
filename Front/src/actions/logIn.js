// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const AUTHENTIFICATION = 'AUTHENTIFICATION';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const authentification = () => ({
  type: AUTHENTIFICATION,
});

