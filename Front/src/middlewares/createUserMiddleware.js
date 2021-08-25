import axios from 'axios';
import { CREATE_USER } from '../actions/createUser';

const createUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const { email, password } = store.getState().createUser;
      console.log(`On va s'inscrire avec email: ${email} et mdp: ${password}`);
      // axios.post(
      // )
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     // TODO pour afficher un message d'erreur, il faudrait ajouter une info
      //     // dans le state, et dispatcher ici une nouvelle action
      //     console.log(error);
      //   });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default createUserMiddleware;
