// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_TOGGLE = 'UPDATE_TOGGLE';
export const CREATE_USER = 'CREATE_USER';
export const FIND_FOOD = 'FIND_FOOD';
export const SAVE_FOOD = 'SAVE_FOOD';
export const UPDATE_ERROR_INSCRIPTION = 'UPDATE_ERROR_INSCRIPTION';

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

export const findFood = () => ({
  type: FIND_FOOD,
});

export const updateErrorInscription = (identifier) => ({
  type: UPDATE_ERROR_INSCRIPTION,
  identifier: identifier,
});

export const saveFood = (newValue) => ({
  type: SAVE_FOOD,
  newValue: newValue,
});
