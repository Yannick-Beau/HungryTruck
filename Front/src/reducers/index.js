import { combineReducers } from 'redux';

// on importe tous les reducers
import createUserReducer from './createUserReducer';
import logInReducer from './logInReducer';
import newFoodTruckReducer from './newFoodTruckReducer';
import searchReducer from './searchReducer';
import toolsReducer from './toolsReducer';
// etc

// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  createUser: createUserReducer,
  logIn: logInReducer,
  search: searchReducer,
  tools: toolsReducer,
  newFT: newFoodTruckReducer,
  // etc
});

export default rootReducer;
