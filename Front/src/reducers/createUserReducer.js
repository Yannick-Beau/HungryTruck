import {
  SAVE_FOOD,
  UPDATE_FIELD,
  UPDATE_TOGGLE,
  UPDATE_ERROR_INSCRIPTION,
  UPDATE_ADDRESS,
} from '../actions/createUser';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  address: '',
  long: '',
  lat: '',
  siret: null,
  pictureUser: '',
  createPro: false,
  foods: [],
  errorInscription: false,
  errorInscriptionText: '',
};

function createUserReducer(state = initialState, action = {}) {
  switch (action.type) {
  // Gestion des formulaires dans le state
    case UPDATE_FIELD:
      // Formulaire de création d'un user
      switch (action.identifier) {
        case 'email':
          return {
            ...state,
            email: action.newValue,
          };
        case 'pictureUser':
          return {
            ...state,
            pictureUser: action.newValue,
          };
        case 'nickname':
          return {
            ...state,
            nickname: action.newValue,
          };
        case 'password':
          return {
            ...state,
            password: action.newValue,
          };
        case 'passwordConfirm':
          return {
            ...state,
            passwordConfirm: action.newValue,
          };
        case 'siret':
          return {
            ...state,
            siret: action.newValue,
          };
        default:
          return state;
      }

    // Gestion des toggles dans le state
    case UPDATE_TOGGLE:
      switch (action.identifier) {
        // Toggle createPRo
        case 'togglePro':
          return {
            ...state,
            createPro: action.newValue,
          };
        // Tous les toggles food passe dans le default
        default: {
          // On clone le tableau foods pour tavailler dessus
          const updateFood = [
            ...state.foods,
          ];
          // Création d'un nouveau tableau
          // avec la clé isCheck modifier celon l'identifier du toggle
          const newFood = updateFood.map((item) => {
            let newKeyFood = {
              ...item,
            };
            if (item.name === action.identifier) {
              newKeyFood = {
                ...item,
                isCheck: !item.isCheck,
              };
            }
            return newKeyFood;
          });
          return {
            ...state,
            foods: newFood,
          };
        }
      }
    case UPDATE_ERROR_INSCRIPTION: {
      switch (action.identifier) {
        case 'password':
          return {
            ...state,
            errorInscription: true,
            errorInscriptionText: 'Les mots de passe doivent être identique.',
          };
        default:
          return state;
      }
    }
    case SAVE_FOOD:
      return {
        ...state,
        foods: action.newValue,
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: action.address,
        long: action.long,
        lat: action.lat,
      };
    default:
      return state;
  }
}

export default createUserReducer;
