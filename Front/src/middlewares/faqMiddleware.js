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
          store.dispatch(saveFaq(response.data));
          store.dispatch(loadingFaq());
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

export default faqMiddleware;
