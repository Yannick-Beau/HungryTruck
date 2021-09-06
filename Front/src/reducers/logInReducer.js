import {
  CONNECT_USER,
  UPDATE_FIELD,
  LOG_OUT,
  CONNECT_PRO,
  IS_SUCCESS_LOGIN,
} from '../actions/logIn';

const initialState = {
  email: '',
  password: '',
  adresse: '',
  avatar: '',
  latitude: 0,
  longitude: 0,
  foodLike: [],
  id: null,
  pseudo: '',
  roles: [],
  siret: 0,
  trucksPro: [],
  isPro: false,
  logged: false,
  isSuccessLogIn: null,
};

function logInReducer(state = initialState, action = {}) {
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case IS_SUCCESS_LOGIN: {
      return {
        ...state,
        isSuccessLogIn: action.newValue,
      };
    }
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
        email: action.email,
        adresse: action.adresse,
        avatar: action.avatar,
        longitude: action.longitude,
        latitude: action.latitude,
        foodLike: action.foodLike,
        id: action.id,
        pseudo: action.pseudo,
        roles: action.roles,
        password: '',
      };
    case CONNECT_PRO:
      return {
        ...state,
        siret: action.siret,
        trucksPro: action.trucksPro,
        isPro: true,
      };
    case LOG_OUT:
      return {
        ...state,
        email: '',
        adresse: '',
        avatar: '',
        city: '',
        cp: null,
        foodLike: [],
        id: null,
        pseudo: '',
        roles: [],
        logged: false,
        siret: 0,
        trucksPro: [],
        isPro: false,
      };
    default:
      return state;
  }
}

export default logInReducer;
