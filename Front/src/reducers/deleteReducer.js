import { DEL_USER, TRUCK_DEL } from '../actions/delUser';

const initialState = {
  deleteUser: '',
};

function deleteReducer(state = initialState, action = {}) {
  // Gestion des formulaires dans le state
  switch (action.type) {
    // Gestion des input du formulaire de connexion
    case DEL_USER:
      // Formulaire de connection
      switch (action.identifier) {
        case 'deleteUser':
          return {
            ...state,
            deleteUser: action.newValue,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default deleteReducer;
