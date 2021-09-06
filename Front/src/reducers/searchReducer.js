import { SEARCH_FIELD, LOAD_SEARCH } from '../actions/search';

const initialState = {
  search: '',
  trucks: [],
};

function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case SEARCH_FIELD:
      return {
        ...state,
        search: action.newValue,
      };
    case LOAD_SEARCH:
      return {
        ...state,
        trucks: action.loadResponse,
      };
    default:
      return state;
  }
}

export default searchReducer;
