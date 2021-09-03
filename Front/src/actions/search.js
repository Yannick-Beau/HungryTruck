// === action types
export const SEARCH_FIELD = 'SEARCH_FIELD';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const LOAD_SEARCH = 'LOAD_SEARCH';

// === action creators
export const searchField = (newValue, identifier) => ({
  type: SEARCH_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const fetchSearch = () => ({
  type: FETCH_SEARCH,
});

export const loadSearch = (loadResponse) => ({
  type: LOAD_SEARCH,
  loadResponse: loadResponse,

});
