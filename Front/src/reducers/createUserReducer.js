import { SAVE_FOOD, UPDATE_FIELD, UPDATE_TOGGLE } from '../actions/createUser';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  address: '',
  cp: '',
  city: '',
  siret: '',
  pictureUser: '',
  createPro: false,
  foods: [],
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
        default:
          const updateFood = [
            ...state.foods
          ];
          const newFood = updateFood.map((item) => {
            let newKeyFood = {...item}
            if(item.name === action.identifier) {
              newKeyFood = {...item,
              isCheck: !item.isCheck};
            }
            return newKeyFood;
          })
          return {
            ...state,
            foods: newFood,
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

export default createUserReducer;
