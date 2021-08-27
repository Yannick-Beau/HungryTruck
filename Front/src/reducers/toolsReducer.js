import { CHANGE_STATUS_ICON_USER } from '../actions/tools';

const initialState = {
  iconUserIsOpen: false,
};

function toolsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_STATUS_ICON_USER:
      console.log('je rentre dans le switch tools');
      return {
        ...state,
        iconUserIsOpen: !state.iconUserIsOpen,
      };
    default:
      return state;
  }
}

export default toolsReducer;
