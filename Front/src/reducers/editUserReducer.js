import {
  SAVE_FOOD,
  EDIT_USER,
  EDIT_PRO,
  UPDATE_FIELD,
  UPDATE_TOGGLE,
} from '../actions/editUser';

const initialState = {
  email: '',
  password: '',
  adresse: '',
  avatar: '',
  city: '',
  cp: null,
  food: [],
  id: null,
  pseudo: '',
  roles: [],
  siret: 0,
  trucksPro: [],
  isPro: false,
};

function editUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_FOOD:
      return {
        ...state,
        foods: action.newValue,
      };

    case EDIT_USER:
      return {
        ...state,
        logged: true,
        adresse: action.adresse,
        avatar: action.avatar,
        city: action.city,
        cp: action.cp,
        foodLike: action.foodLike,
        id: action.id,
        pseudo: action.pseudo,
        roles: action.roles,
        password: '',
      };
    case EDIT_PRO:
      return {
        ...state,
        siret: action.siret,
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
        case 'address':
          return {
            ...state,
            adresse: action.newValue,
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
    default:
      return state;
  }
}

export default editUserReducer;
