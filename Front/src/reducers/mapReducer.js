import { SAVE_TRUCK } from '../actions/map';

const initialState = {
  trucks: [],
};

function mapReducer(state = initialState, action = {}) {
  // Gestion des formulaires dans le state
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case SAVE_TRUCK:
      // Formulaire de connection
      return {
        ...state,
        trucks: action.newValue,
      };
    default:
      return state;
  }
}

export default mapReducer;
