import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import createUserMiddleware from '../middlewares/createUserMiddleware';
import editUserMiddleware from '../middlewares/editUserMiddleware';
import logInMiddleware from '../middlewares/logInMiddleware';
import searchMiddleware from '../middlewares/searchMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    createUserMiddleware,
    logInMiddleware,
    searchMiddleware,
    editUserMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
