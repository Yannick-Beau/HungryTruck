// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_TOGGLE = 'UPDATE_TOGGLE';
export const CREATE_USER = 'CREATE_USER';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const updateToggle = (newValue, identifier) => ({
  type: UPDATE_TOGGLE,
  newValue: newValue,
  identifier: identifier,
});

export const createUser = () => ({
  type: CREATE_USER,
});
