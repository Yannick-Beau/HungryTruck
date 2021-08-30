// === action types
export const SAVE_FOOD = 'SAVE_FOOD';
export const FIND_FOOD_EDIT = 'FIND_FOOD_EDIT';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_PRO = 'EDIT_PRO';
export const FIND_USER = 'FIND_USER';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_TOGGLE = 'UPDATE_TOGGLE';
export const SAVE_EDIT_USER = 'SAVE_EDIT_USER';

// === action creators
export const saveFood = (newValue) => ({
  type: SAVE_FOOD,
  newValue: newValue,
});

export const findFood = () => ({
  type: FIND_FOOD_EDIT,
});

export const findUser = () => ({
  type: FIND_USER,
});

export const editUser = (address, avatar, city, cp, foodLike, id, pseudo, roles) => ({
  type: EDIT_USER,
  adresse: address,
  avatar: avatar,
  city: city,
  cp: cp,
  foodLike: foodLike,
  id: id,
  pseudo: pseudo,
  roles: roles,
});

export const editPro = (siret, trucksPro) => ({
  type: EDIT_PRO,
  siret: siret,
  trucksPro: trucksPro,
});

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

export const saveEditUser = () => ({
  type: SAVE_EDIT_USER,
});
