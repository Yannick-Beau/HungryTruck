import axios from 'axios';
import { FETCH_SEARCH, loadSearch } from '../actions/search';
import URL from '../data/ip';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SEARCH: {
      const { search } = store.getState().search;
      axios.get(
        // URL
        `${URL}/api/foodtruck/search`,
        // paramètres
        {
          id: search,
          name: search,
          num_tel: search,
          overview: search,
          intagram: search,
          twitter: search,
          facebook: search,
          sell_type_food: search,
          event: search,
        },
      )
        .then((response) => {
          store.dispatch(loadSearch(response.data));
        })
        .catch((error) => {
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default searchMiddleware;
