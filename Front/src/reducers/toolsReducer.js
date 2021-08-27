import { CHANGE_STATUS_ICON_USER } from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
};

function toolsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_STATUS_ICON_USER:
      return {
        ...state,
        iconUserIsOpen: !iconUserIsOpen,
      };
    default:
      return state;
  }
}

export default toolsReducer;
