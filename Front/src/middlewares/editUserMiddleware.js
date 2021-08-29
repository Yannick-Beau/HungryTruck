import axios from 'axios';
import { EDIT_USER, FIND_FOOD, saveFood } from '../actions/createUser';
import URL from '../data/ip';

const editUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FIND_FOOD: {
      axios.get(`${URL}/api/categoryfood`)
        .then((response) => {
        // clone d'un tableau pour pour pouvoir faire un map dessus
          const data = [
            ...response.data,
          ];
          // création d'un nouveau tableau
          const newData = data.map((item) => {
            // Sur chaque item on ajoute une entrée isCheck à false
            // qui nous aidera pour controler les champs checkbox food
            const newKey = {
              ...item,
              isCheck: false,
            };
            return newKey;
          });
          // on sauvegarde le nouveau tableau dans le state
          store.dispatch(saveFood(newData));
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

export default editUserMiddleware;
