// === action types
export const FIND_FAQ = 'FIND_FAQ';
export const SAVE_FAQ = 'SAVE_FAQ';

// === action creators
export const findFaq = () => ({
  type: FIND_FAQ,
});

export const saveFaq = (newValue) => ({
  type: SAVE_FAQ,
  newValue: newValue,
});
