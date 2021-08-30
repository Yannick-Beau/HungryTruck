import axios from 'axios';
import { FIND_TRUCK, saveTruck } from '../actions/newTime';
import URL from '../data/ip';

const newTimeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FIND_TRUCK: {
      const token = localStorage.getItem('token');
      axios.get(
        `${URL}/api/pro`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveTruck(response.data.truck_id));
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

export default newTimeMiddleware;
