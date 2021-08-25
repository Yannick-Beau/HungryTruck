import { UPDATE_FIELD } from '../actions/createUser';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  address: '',
  cp: '',
  city: '',
  siret: '',
  logged: false,
  token: null,
};

function createUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FIELD:
      switch (action.identifier) {
        case 'email':
          return {
            ...state,
            email: action.newValue,
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
        // case 'logged':
        //   return {
        //     ...state,
        //     logged: action.newValue,
        //   };
        // case 'token':
        //   return {
        //     ...state,
        //     token: action.newValue,
        //   };
        default:
          return state;
      }

    default:
      return state;
  }
}

export default createUserReducer;
