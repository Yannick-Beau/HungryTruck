// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const AUTHENTIFICATION = 'AUTHENTIFICATION';
export const CONNECT_USER = 'CONNECT_USER';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const authentification = () => ({
  type: AUTHENTIFICATION,
});

export const connectUser = (address, avatar, city, cp, food_like, id, pseudo, roles) => ({
  type: CONNECT_USER,
  adresse: address,
  avatar: avatar,
  city: city,
  cp: cp,
  food_like: food_like,
  id: id,
  pseudo: pseudo,
  roles: roles,
});
