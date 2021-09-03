import {
  SAVE_FOOD,
  EDIT_USER,
  EDIT_PRO,
  UPDATE_FIELD,
  UPDATE_TOGGLE,
  EDIT_ADDRESS,
} from '../actions/editUser';

const initialState = {
  email: '',
  emailBeforeEdit: '',
  password: '',
  adresse: '',
  avatar: '',
  food: [],
  long: '',
  lat: '',
  pseudo: '',
  trucksPro: [],
  isPro: false,
};

function editUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_FOOD:
      return {
        ...state,
        food: action.newValue,
      };

    case EDIT_USER:
      return {
        ...state,
        logged: true,
        email: action.email,
        emailBeforeEdit: action.email,
        adresse: action.adresse,
        avatar: action.avatar,
        foodLike: action.foodLike,
        id: action.id,
        pseudo: action.pseudo,
        roles: action.roles,
        password: '',
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        adresse: action.address,
        long: action.long,
        lat: action.lat,
      };
    case EDIT_PRO:
      return {
        ...state,
        trucksPro: action.trucksPro,
        isPro: true,
      };
    case UPDATE_FIELD:
      // Formulaire de création d'un user
      switch (action.identifier) {
        case 'email':
          return {
            ...state,
            email: action.newValue,
          };
        case 'address':
          return {
            ...state,
            adresse: action.newValue,
          };
        case 'pictureUser':
          return {
            ...state,
            avatar: action.newValue,
          };
        case 'nickname':
          return {
            ...state,
            pseudo: action.newValue,
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
            ...state.food,
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
            food: newFood,
          };
        }
      }
    default:
      return state;
  }
}

export default editUserReducer;
