import axios from 'axios';
import {
  AUTHENTIFICATION,
  SAVE_USER,
  connectUser,
  connectPro,
  saveUser,
} from '../actions/logIn';
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
            responseUser.data.adresse,
            responseUser.data.avatar,
            responseUser.data.city,
            responseUser.data.cp,
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
          store.dispatch(saveUser());
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

export default createUserMiddleware;
