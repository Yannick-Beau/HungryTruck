import {
  CHANGE_STATUS_ICON_USER,
  LOADING_EDIT_USER,
  CHANGE_REDIRECT,
  CHANGE_REDIRECT_LOGIN,
  LOADING_MAP,
  LOADING_FAQ,
} from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
  loadEditUser: false,
  loadMap: false,
  loadFaq: false,
  redirect: false,
  redirectLogIn: false,
};

function toolsReducer(state = initialState, action = {}) {
  console.log(action.type);
  switch (action.type) {
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
