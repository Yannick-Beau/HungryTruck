import { CONTACT_US } from '../actions/contact';

const initialState = {
  mail: '',
  message: '',
};

function contactUs(state = initialState, action = {}) {
  // Gestion des formulaires dans le state
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case CONTACT_US:
      // Formulaire de connection
      switch (action.identifier) {
        case 'mail':
          return {
            ...state,
            mail: action.newValue,
          };
        case 'message':
          return {
            ...state,
            message: action.newValue,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default contactUs;
