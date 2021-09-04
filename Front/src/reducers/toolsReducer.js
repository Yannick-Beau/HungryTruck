import {
  CHANGE_STATUS_ICON_USER,
  LOADING_EDIT_USER,
  CHANGE_REDIRECT,
  CHANGE_REDIRECT_LOGIN,
  LOADING_MAP,
  LOADING_FAQ,
  LOADING_LOGIN,
  CHANGE_SHOW_FLASH,
  CHANGE_IS_LOADING,
} from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
  loadEditUser: false,
  loadMap: false,
  loadFaq: false,
  redirect: false,
  redirectLogIn: false,
  loadLogIn: false,
  loadAddTruck: false,
  flashAddTruck: null,
  loadAddEvent: false,
  flashAddEvent: null,
  loadDelEvent: false,
  flashDelEvent: null,
  loadDelTruck: false,
  flashDelTruck: null,
};

function toolsReducer(state = initialState, action = {}) {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_IS_LOADING:
      switch (action.identifier) {
        case 'addTruck':
          return {
            ...state,
            loadAddTruck: action.newValue,
          };
        case 'addEvent':
          return {
            ...state,
            loadAddEvent: action.newValue,
          };
        case 'delEvent':
          return {
            ...state,
            loadDelEvent: action.newValue,
          };
        case 'delTruck':
          return {
            ...state,
            loadDelTruck: action.newValue,
          };
        default:
          return state;
      }

    case CHANGE_SHOW_FLASH:
      switch (action.identifier) {
        case 'addTruck':
          return {
            ...state,
            flashAddTruck: action.newValue,
          };
        case 'addEvent':
          return {
            ...state,
            flashAddEvent: action.newValue,
          };
        case 'delEvent':
          return {
            ...state,
            flashDelEvent: action.newValue,
          };
        case 'delTruck':
          return {
            ...state,
            flashDelTruck: action.newValue,
          };
        default:
          return state;
      }

    case CHANGE_STATUS_ICON_USER: {
      return {
        ...state,
        iconUserIsOpen: !state.iconUserIsOpen,
      };
    }
    case CHANGE_REDIRECT: {
      return {
        ...state,
        redirect: !state.redirect,
      };
    }
    case CHANGE_REDIRECT_LOGIN: {
      return {
        ...state,
        redirectLogIn: !state.redirectLogIn,
      };
    }
    case LOADING_EDIT_USER: {
      return {
        ...state,
        loadEditUser: !state.loadEditUser,
      };
    }
    case LOADING_MAP: {
      return {
        ...state,
        loadMap: !state.loadMap,
      };
    }
    case LOADING_FAQ: {
      return {
        ...state,
        loadFaq: !state.loadFaq,
      };
    }
    default:
      return state;
  }
}

export default toolsReducer;
