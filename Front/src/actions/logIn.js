// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const AUTHENTIFICATION = 'AUTHENTIFICATION';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_PRO = 'CONNECT_PRO';
export const LOG_OUT = 'LOG_OUT';

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

export const connectPro = (siret, trucksPro) => ({
  type: CONNECT_PRO,
  siret: siret,
  trucksPro: trucksPro,
});

export const logOut = () => ({
  type: LOG_OUT
});
