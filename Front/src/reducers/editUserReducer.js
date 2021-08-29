import {
  SAVE_FOOD,
} from '../actions/createUser';

const initialState = {
  foods: [],
};

function editUserReducer(state = initialState, action = {}) {
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
        case 'address':
          return {
            ...state,
            address: action.newValue,
          };
        case 'cp':
          return {
            ...state,
            cp: action.newValue,
          };
        case 'city':
          return {
            ...state,
            city: action.newValue,
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
    default:
      return state;
  }
}

export default editUserReducer;
