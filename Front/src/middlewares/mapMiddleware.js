import axios from 'axios';
import { SEND_TRUCK, saveTruck } from '../actions/map';
import URL from '../data/ip';

const mapMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_TRUCK: {
      axios.get(
        // URL
        `${URL}/api/foodtruck`,
        // paramètres
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveTruck(response.data));
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

export default mapMiddleware;
