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
          const date = new Date();
          const {
            longitude,
            latitude,
          } = store.getState().logIn;
          let centerLong;
          let centerLat;
          if (longitude === 0) {
            centerLong = '2.35183';
          }
          else {
            centerLong = longitude;
          }
          if (latitude === 0) {
            centerLat = '48.85658';
          }
          else {
            centerLat = latitude;
          }
          const signLongitude = Math.sign(parseFloat(longitude));
          const signLatitude = Math.sign(parseFloat(latitude));
          let longMax;
          let longMin;
          let latMax;
          let latMin;
          if (signLongitude === 0 || signLongitude === 1) {
            longMax = parseFloat(centerLong) + 0.10;
            longMin = parseFloat(centerLong) - 0.10;
          }
          if (signLongitude === -1) {
            const convertLong = -parseFloat(centerLong);
            longMax = convertLong + 0.10;
            longMin = convertLong - 0.10;
          }
          if (signLatitude === 0 || signLatitude === 1) {
            latMax = parseFloat(centerLat) + 0.10;
            latMin = parseFloat(centerLat) - 0.10;
          }
          if (signLatitude === -1) {
            const convertLat = -parseFloat(centerLat);
            latMax = convertLat + 0.10;
            latMin = convertLat - 0.10;
          }
          const trucksFilter = [];
          response.data.map((truck) => {
            const eventsFilter = truck.events.filter((item) => {
              const hoursEndRplace = item.hours_end.replace('h', '-');
              const hoursEnd = hoursEndRplace.split('-');
              let longConvert;
              let latConvert;
              if (signLongitude === 0 || signLongitude === 1) {
                longConvert = item.longitude;
              }
              if (signLongitude === -1) {
                longConvert = -item.longitude;
              }
              if (signLatitude === 0 || signLatitude === 1) {
                latConvert = item.latitude;
              }
              if (signLatitude === -1) {
                latConvert = -item.latitude;
              }
              return item.day === date.toLocaleDateString('fr-FR', { weekday: 'long' }) // jour
              && (
                (parseInt(hoursEnd[0], 10) >= date.getHours() // hours
              && parseInt(hoursEnd[1], 10) > date.getMinutes()) // min
              || parseInt(hoursEnd[0], 10) > date.getHours() // hours
              )
              && (
                (longConvert >= longMin && longConvert <= longMax)
              && (latConvert >= latMin && latConvert <= latMax)
              );
            });
            if (eventsFilter.length > 0) {
              trucksFilter.push({
                ...truck,
                events: eventsFilter,
              });
            }
            return {};
          });
          store.dispatch(saveTruck(trucksFilter));
          store.dispatch(loadSearch(response.data));
          store.dispatch(loadingMap());
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

export default mapMiddleware;
