import axios from 'axios';
import { FETCH_SEARCH, loadSearch } from '../actions/search';
import URL from '../data/ip';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SEARCH: {
      const { search } = store.getState().search;
      console.log(`On va faire une recherche ${search}`);
      axios.get(
        // URL
        `http://${URL}/api/foodtruck/search`,
        // paramètres
        {
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
          console.log(response);

          store.dispatch(loadSearch(response.data));
          // console.log(response.data.token);
          // localStorage.setItem('token', response.data.token);
          // console.log(localStorage.getItem('token'));
          // window.location = '/';
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default searchMiddleware;
