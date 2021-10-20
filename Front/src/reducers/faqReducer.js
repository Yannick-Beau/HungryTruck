import { SAVE_FAQ } from '../actions/faq';

const initialState = {
  faq: [],
};

function faqReducer(state = initialState, action = {}) {
  // Gestion des formulaires dans le state
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case SAVE_FAQ:
      return {
        ...state,
        faq: action.newValue,
      };
    default:
      return state;
  }
}

export default faqReducer;
