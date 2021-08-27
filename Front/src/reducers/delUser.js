import { DEL_USER } from "../actions/delUser";

const initialState = {
  password: '',
};

function createUserReducer(state = initialState, action = {}) {
  switch (action.type) {
  // Gestion des formulaires dans le state
    case DEL_USER:
      // Formulaire de création d'un user
    default:
      return state;
  }
}

export default createUserReducer;
