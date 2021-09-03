// === action types
export const SEND_TRUCK = 'SEND_TRUCK';
export const SAVE_TRUCK = 'SAVE_TRUCK';

// === action creators
export const sendTruck = () => ({
  type: SEND_TRUCK,
});

export const saveTruck = (newValue) => ({
  type: SAVE_TRUCK,
  newValue: newValue,
});
