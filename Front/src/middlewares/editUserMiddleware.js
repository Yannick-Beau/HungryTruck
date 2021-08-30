import axios from 'axios';
import { loadingEditUser } from '../actions/tools';
import {
  FIND_FOOD_EDIT,
  FIND_USER,
  SAVE_EDIT_USER,
  editUser,
  editPro,
  saveFood,
  findUser,
} from '../actions/editUser';
import URL from '../data/ip';
import { saveUser } from '../actions/logIn';

const editUserMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FIND_USER: {
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
          store.dispatch(editUser(
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
                store.dispatch(editPro(responsePro.data.siret, responsePro.data.truck_id));
              });
          }
          console.log('valeur de loadEditUser avant dispatch', store.getState().tools.loadEditUser);
          store.dispatch(loadingEditUser());
          console.log('valeur de loadEditUser après dispatch', store.getState().tools.loadEditUser);
        });
      break;
    }
    case FIND_FOOD_EDIT: {
      axios.get(`${URL}/api/categoryfood`)
        .then((response) => {
        // clone d'un tableau pour pour pouvoir faire un map dessus
          const data = [
            ...response.data,
          ];
          // création d'un nouveau tableau
          const newData = data.map((item) => {
            const foodIsLike = store.getState().logIn.foodLike.find((itemLike) => (
              item.name === itemLike.name
            ));
            console.log('foodIsLike est :', foodIsLike);
            if (foodIsLike !== undefined) {
              // console.log('la food aimer est egale a la food');
              return {
                ...item,
                isCheck: true,
              };
            }
            // console.log('la food aimer est egale a la food');
            return {
              ...item,
              isCheck: false,
            };
          });
          // console.log('on va save les food', newData);
          // on sauvegarde le nouveau tableau dans le state
          store.dispatch(saveFood(newData));
          store.dispatch(findUser());
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
          console.log(error);
        });
      break;
    }
    case SAVE_EDIT_USER: {
      const {
        email,
        pseudo,
        avatar,
        cp,
        city,
        adresse,
        siret,
        foods,
      } = store.getState().editUser;
      const foodLikeFilter = foods.filter((item) => (item.isCheck));
      const foodLikeMap = foodLikeFilter.map((item) => {
        const newFood = {
          id: item.id,
          name: item.name,
        };
        return newFood;
      });
      const foodLike = [
        ...foodLikeMap,
      ];
      console.log('new food like', foodLike);
      const newCP = parseInt(cp, 10);
      const newSiret = parseInt(siret, 10);
      const data = {
        email: email,
        pseudo: pseudo,
        avatar: avatar,
        cp: newCP,
        city: city,
        adresse: adresse,
        food_like: foodLike,
        siret: newSiret,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      axios.put(`${URL}/api/pro/edit`, data, config)
        .then((response) => {
          console.log(response);
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

export default editUserMiddleware;
