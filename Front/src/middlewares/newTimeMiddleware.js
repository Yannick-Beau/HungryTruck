import axios from 'axios';
import { ADD_EVENT } from '../actions/newTime';
import { changeRedirect } from '../actions/tools';
import URL from '../data/ip';

const newTimeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_EVENT: {
      console.log('on va addEent');
      const token = localStorage.getItem('token');
      const {
        foodTruck,
        newDay,
        newStartTime,
        newEndTime,
        address,
        cp,
        city,
      } = store.getState().newTime;
      axios.post(
        `${URL}/api/foodtruck/${foodTruck}/event/create`,
        {
          day: newDay,
          hours: newStartTime,
          hours_end: newEndTime,
          cp: cp,
          city: city,
          adresse: address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(changeRedirect());
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
