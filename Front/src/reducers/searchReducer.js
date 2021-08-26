import { SEARCH_FIELD } from '../actions/search';

const initialState = {
  search: '',
};

function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case SEARCH_FIELD:
      return {
        ...state,
        search: action.newValue,
      };
    default:
      return state;
  }
}

export default searchReducer;
