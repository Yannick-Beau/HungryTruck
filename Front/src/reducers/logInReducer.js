import { UPDATE_FIELD } from '../actions/logIn';

const initialState = {
  email: '',
  password: '',
  logged: false,
  token: null,
};

function logInReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case UPDATE_FIELD:
      // Formulaire de création d'un user
      switch (action.identifier) {
        case 'email':
          return {
            ...state,
            email: action.newValue,
          };
        case 'password':
          return {
            ...state,
            password: action.newValue,
          };
        default:
          return state;
        }
    default:
      return state;
  }
}

export default logInReducer;
