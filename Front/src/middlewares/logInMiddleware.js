import axios from 'axios';
import {
  AUTHENTIFICATION,
  SAVE_USER,
  connectUser,
  connectPro,
  saveUser,
} from '../actions/logIn';
import { sendTruck } from '../actions/map';
import { loadingMap, changeIsLoading, changeShowFlash } from '../actions/tools';
import URL from '../data/ip';

const createUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_USER: {
      const token = localStorage.getItem('token');

      axios.get(
        `${URL}/api/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((responseUser) => {
          store.dispatch(connectUser(
            responseUser.data.email,
            responseUser.data.adresse,
            responseUser.data.avatar,
            responseUser.data.longitude,
            responseUser.data.latitude,
            responseUser.data.food_like,
            responseUser.data.id,
            responseUser.data.pseudo,
            responseUser.data.roles,
          ));
          const isPro = responseUser.data.roles.find((item) => item === 'ROLE_PRO');
          if (isPro !== undefined) {
            axios.get(
              `${URL}/api/pro`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            )
              .then((responsePro) => {
                store.dispatch(connectPro(responsePro.data.siret, responsePro.data.truck_id));
                store.dispatch(loadingMap());
                store.dispatch(sendTruck());
              });
          }
        });
      break;
    }
    case AUTHENTIFICATION: {
      const { email, password } = store.getState().logIn;
      axios.post(
        // URL
        `${URL}/api/login_check`,
        // paramètres
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(changeIsLoading(false, 'login'));
          store.dispatch(changeShowFlash('redirect', 'login'));
        })
        .catch((error) => {
          store.dispatch(changeIsLoading(false, 'login'));
          store.dispatch(changeShowFlash('error', 'login'));
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default createUserMiddleware;
