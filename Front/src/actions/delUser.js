// === action types
export const DEL_USER = 'DEL_USER';
export const SEND_DEL = 'SEND_DEL';

// === action creators
export const delUser = (newValue, identifier) => ({
  type: DEL_USER,
  newValue: newValue,
  identifier: identifier,
});

export const sendDel = () => ({
  type: SEND_DEL,
});
