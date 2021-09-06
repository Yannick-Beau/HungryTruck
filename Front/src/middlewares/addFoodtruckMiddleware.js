import axios from 'axios';
import { ADD_FOODTRUCK } from '../actions/newFoodTruck';
import { changeIsLoading, changeShowFlash } from '../actions/tools';
import URL from '../data/ip';

const addFoodTruckMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_FOODTRUCK: {
      const {
        name,
        facebook,
        instagram,
        twitter,
        phone,
        picture,
        overview,
        type1,
        type2,
        type3,
      } = store.getState().newFT;

      const foods = [
        type1,
        type2,
        type3,
      ];

      axios.post(
        `${URL}/api/foodtruck/create`,
        {
          name: name,
          facebook: facebook,
          instagram: instagram,
          twitter: twitter,
          overview: overview,
          picture: picture,
          num_tel: phone,
          sell_type_food: foods,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(changeIsLoading(false, 'addTruck'));
          store.dispatch(changeShowFlash('redirect', 'addTruck'));
        })
        .catch((error) => {
          store.dispatch(changeIsLoading(false, 'addTruck'));
          store.dispatch(changeShowFlash('error', 'addTruck'));
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default addFoodTruckMiddleware;
