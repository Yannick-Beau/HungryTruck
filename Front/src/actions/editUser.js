export const SAVE_FOOD = 'SAVE_FOOD';

export const saveFood = (newValue) => ({
  type: SAVE_FOOD,
  newValue: newValue,
});
