import axios from 'axios';
import { CREATE_USER, FIND_FOOD, saveFood } from '../actions/createUser';
import { authentification } from '../actions/logIn';
import { changeIsLoading, changeShowFlash } from '../actions/tools';
import URL from '../data/ip';

const createUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const {
        email,
        password,
        createPro,
        nickname,
        pictureUser,
        address,
        long,
        lat,
        siret,
        foods,
      } = store.getState().createUser;
      const foodLikeFilter = foods.filter((item) => (item.isCheck));
      const foodLike = [];
      foodLikeFilter.map((item) => (
        foodLike.push(item.id)
      ));
      let proUser = ['ROLE_USER'];
      if (createPro === true) {
        proUser = ['ROLE_PRO'];
      }
      const newLong = long.toString();
      const newLat = lat.toString();
      console.log('new food like', foodLike);
      console.log(`
        email : ${email},
        password : ${password},
        user : ${proUser},
        pesudo : ${nickname},
        pictureUser : ${pictureUser},
        long : ${long},
        lat : ${lat},
        address : ${address},
        siret : ${siret},
        foodLike: ${foodLike}`);
      axios.post(`${URL}/api/user/create`,
        {
          email: email,
          roles: proUser,
          password: password,
          pseudo: nickname,
          avatar: pictureUser,
          longitude: newLong,
          latitude: newLat,
          adresse: address,
          siret: siret,
          food_like: foodLike,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(authentification());
          store.dispatch(changeIsLoading(false, 'createUser'));
          store.dispatch(changeShowFlash('redirect', 'createUser'));
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
          store.dispatch(changeIsLoading(false, 'createUser'));
          store.dispatch(changeShowFlash('error', 'createUser'));
        });
      break;
    }
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

export default createUserMiddleware;
