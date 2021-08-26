// === action types
export const SEARCH_FIELD = 'SEARCH_FIELD';
export const FETCH_SEARCH = 'FETCH_SEARCH';

// === action creators
export const searchField = (newValue, identifier) => ({
  type: SEARCH_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const fetchSearch = () => ({
  type: FETCH_SEARCH,
});
