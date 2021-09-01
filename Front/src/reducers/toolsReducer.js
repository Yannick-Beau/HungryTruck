import {
  CHANGE_STATUS_ICON_USER,
  LOADING_EDIT_USER,
  CHANGE_REDIRECT,
  CHANGE_REDIRECT_LOGIN,
} from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
  loadEditUser: false,
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
    default:
      return state;
  }
}

export default toolsReducer;
