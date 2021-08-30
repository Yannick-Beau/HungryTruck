import axios from 'axios';
import { ADD_FOODTRUCK, loadNewFoodTruck } from '../actions/newFoodTruck';
import URL from '../data/ip';

const addFoodTruckMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case ADD_FOODTRUCK: {
      const {
        name,
        facebook,
        instagram,
        twitter,
        newDay,
        newStartTime,
        newEndTime,
        phone,
      } = store.getState().newFT;
      // console.log(`
      //   nom : ${name},
      //   fb : ${facebook};
      //   insta : ${instagram};
      //   twitter : ${twitter};
      //   phone : ${phone};
      // `);

      /*
      overview/
      $sell_type_food/
      picture
      */

      axios.post(
        `${URL}/api/foodtruck/create`,
        {
          name: name,
          facebook: facebook,
          instagram: instagram,
          twitter: twitter,
          // newDay: newDay,
          // newStartTime: newStartTime,
          // newEndTime: newEndTime,
          num_tel: phone,
        },
      )
        .then((response) => {
          console.log(response);
          store.dispatch(loadNewFoodTruck());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default addFoodTruckMiddleware;
