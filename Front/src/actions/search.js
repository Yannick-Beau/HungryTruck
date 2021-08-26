// === action types
export const SEARCH_FIELD = 'SEARCH_FIELD';

// === action creators
export const searchField = (newValue, identifier) => ({
  type: SEARCH_FIELD,
  newValue: newValue,
  identifier: identifier,
});
