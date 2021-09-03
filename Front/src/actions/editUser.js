// === action types
export const SAVE_FOOD = 'SAVE_FOOD';
export const FIND_FOOD_EDIT = 'FIND_FOOD_EDIT';
export const EDIT_USER = 'EDIT_USER';
export const EDIT_PRO = 'EDIT_PRO';
export const FIND_USER = 'FIND_USER';
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const UPDATE_TOGGLE = 'UPDATE_TOGGLE';
export const SAVE_EDIT_USER = 'SAVE_EDIT_USER';
export const EDIT_ADDRESS = 'EDIT_ADDRESS';

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

export const editUser = (email, address, avatar, foodLike, pseudo) => ({
  type: EDIT_USER,
  email: email,
  adresse: address,
  avatar: avatar,
  foodLike: foodLike,
  pseudo: pseudo,
});

export const editPro = (trucksPro) => ({
  type: EDIT_PRO,
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

export const editAddress = (address, long, lat) => ({
  type: EDIT_ADDRESS,
  address: address,
  long: long,
  lat: lat,
});
