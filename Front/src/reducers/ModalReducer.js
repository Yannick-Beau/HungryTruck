import { MODAL } from '../actions/tools';

const initialState = {
  displayModal: false,
};

function modalReducer(state = initialState, action = {}) {
  switch (action.type) {
    case MODAL:
      return {
        ...state,
        displayModal: !state.displayModal,
      };
    default:
      return state;
  }
}

export default modalReducer;
