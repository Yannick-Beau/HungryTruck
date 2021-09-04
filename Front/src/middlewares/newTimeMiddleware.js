import axios from 'axios';
import { ADD_EVENT, newTime } from '../actions/newTime';
import { changeRedirect, changeIsLoading, changeShowFlash } from '../actions/tools';
import { saveUser } from '../actions/logIn';
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
        long,
        lat,
      } = store.getState().newTime;
      const newLong = long.toString();
      const newLat = lat.toString();
      console.log('longitude', newLong, 'latitude', newLat);
      axios.post(
        `${URL}/api/foodtruck/${foodTruck}/event/create`,
        {
          day: newDay,
          hours: newStartTime,
          hours_end: newEndTime,
          adresse: address,
          longitude: newLong,
          latitude: newLat,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveUser());
          store.dispatch(changeRedirect());
          store.dispatch(changeIsLoading(false, 'addEvent'));
          store.dispatch(changeShowFlash('redirect', 'addEvent'));
          store.dispatch(newTime('', 'longitude'));
          store.dispatch(newTime('', 'latitude'));
          store.dispatch(newTime('', 'foodTruck'));
          store.dispatch(newTime('', 'address'));
          store.dispatch(newTime('', 'newDay'));
          store.dispatch(newTime('', 'newStartTime'));
          store.dispatch(newTime('', 'newEndTime'));
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
          store.dispatch(changeIsLoading(false, 'addEvent'));
          store.dispatch(changeShowFlash('error', 'addEvent'));
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default newTimeMiddleware;
