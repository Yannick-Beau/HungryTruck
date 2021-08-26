import axios from 'axios';
import { AUTHENTIFICATION, connectUser } from '../actions/logIn';

const createUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case AUTHENTIFICATION: {
      const { email, password } = store.getState().logIn;
      console.log(`On va se connecter avec email: ${email} et mdp: ${password}`);
      axios.post(
        // URL
        'http://3.218.156.136/api/login_check',
        // paramètres
        {
          username: email,
          password: password,
        },
      )
        .then((response) => {
          localStorage.setItem('token', response.data.token);
    
          axios.get(
            `http://3.218.156.136/api/user`,
            { 
              headers: {
                "Authorization" : `Bearer ${response.data.token}`
              }
            }
          )
          .then((response) => {
            console.log(response);
            store.dispatch(connectUser(response.data.adresse, response.data.avatar, response.data.city, response.data.cp, response.data.food_like, response.data.id, response.data.pseudo, response.data.roles));
          })

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
