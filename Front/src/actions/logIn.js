// === action types
export const UPDATE_FIELD = 'UPDATE_FIELD';
export const AUTHENTIFICATION = 'AUTHENTIFICATION';
export const CONNECT_USER = 'CONNECT_USER';
export const CONNECT_PRO = 'CONNECT_PRO';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER = 'SAVE_USER';

// === action creators
export const updateField = (newValue, identifier) => ({
  type: UPDATE_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const authentification = () => ({
  type: AUTHENTIFICATION,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const connectUser = (
  email,
  address,
  avatar,
  longitude,
  latitude,
  foodLike,
  id,
  pseudo,
  roles,
) => ({
  type: CONNECT_USER,
  email: email,
  adresse: address,
  avatar: avatar,
  longitude: longitude,
  latitude: latitude,
  foodLike: foodLike,
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
  type: LOG_OUT,
});
