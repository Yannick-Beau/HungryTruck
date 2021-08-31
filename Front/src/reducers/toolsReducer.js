import { CHANGE_STATUS_ICON_USER, LOADING_EDIT_USER, CHANGE_REDIRECT } from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
  loadEditUser: false,
  redirect: false,
};

function toolsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_STATUS_ICON_USER:
      return {
        ...state,
        iconUserIsOpen: !state.iconUserIsOpen,
      };
    case LOADING_EDIT_USER:
      return {
        ...state,
        loadEditUser: !state.loadEditUser,
      };
    case CHANGE_REDIRECT:
      return {
        ...state,
        redirect: !state.redirect,
      };
    default:
      return state;
  }
}

export default toolsReducer;
