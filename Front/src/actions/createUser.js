// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const CREATE_PRO = 'CREATE_PRO';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const updateFieldPro = (newValue) => ({
  type: CREATE_PRO,
  newValue: newValue,
});
