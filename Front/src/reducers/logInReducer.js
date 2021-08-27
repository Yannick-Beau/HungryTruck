import { CONNECT_USER, UPDATE_FIELD, LOG_OUT } from '../actions/logIn';

const initialState = {
  email: '',
  password: '',
  adresse: '',
  avatar: '',
  city: '',
  cp: null,
  food_like: [],
  id: null,
  pseudo: '',
  roles: [],
  logged: false,
};

function logInReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case UPDATE_FIELD:
      // Formulaire de connection
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

    case CONNECT_USER:
      return {
        ...state,
        logged: true,
        adresse: action.adresse,
        avatar: action.avatar,
        city: action.city,
        cp: action.cp,
        food_like: action.food_like,
        id: action.id,
        pseudo: action.pseudo,
        roles: action.roles,
        password: '',
      };
    case LOG_OUT:
      return {
        ...state,
        email: '',
        adresse: '',
        avatar: '',
        city: '',
        cp: null,
        food_like: [],
        id: null,
        pseudo: '',
        roles: [],
        logged: false,
      }  
    default:
      return state;

  }
}

export default logInReducer;
