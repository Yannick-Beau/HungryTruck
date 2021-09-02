import axios from 'axios';
import { SEND_TRUCK, saveTruck } from '../actions/map';
import { loadSearch } from '../actions/search';
import { loadingMap } from '../actions/tools';
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
          const trucksFilter = [];
          response.data.map((truck) => {
            // console.log(truck);
            const eventsFilter = truck.events.filter((item) => {
              const hoursEndRplace = item.hours_end.replace('h', '-');
              const hoursEnd = hoursEndRplace.split('-');
              console.log(parseInt(hoursEnd[0], 10), parseInt(hoursEnd[1], 10));
              return item.day === 'mardi' && ((parseInt(hoursEnd[0], 10) >= 1 && parseInt(hoursEnd[1], 10) > 10) || parseInt(hoursEnd[0], 10) > 1);
            });
            // console.log('eventsFilter : ', eventsFilter);
            if (eventsFilter.length > 0) {
              trucksFilter.push({
                ...truck,
                events: eventsFilter,
              });
            }
            return {};
          });
          console.log('trucksFilter : ', trucksFilter);
          store.dispatch(saveTruck(trucksFilter));
          store.dispatch(loadSearch(response.data));
          store.dispatch(loadingMap());
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
