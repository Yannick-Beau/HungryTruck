import axios from 'axios';
import { FIND_FAQ, saveFaq } from '../actions/faq';
import { loadingFaq } from '../actions/tools';
import URL from '../data/ip';

const faqMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FIND_FAQ: {
      axios.get(
        // URL
        `${URL}/api/faq`,
        // paramètres
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFaq(response.data));
          store.dispatch(loadingFaq());
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

export default faqMiddleware;
