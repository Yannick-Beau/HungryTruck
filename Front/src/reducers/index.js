import { combineReducers } from 'redux';

// on importe tous les reducers
import createUserReducer from './createUserReducer';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  createUser: createUserReducer,
  // etc
});

export default rootReducer;
