import axios from 'axios';
import { logOut, saveUser } from '../actions/logIn';
import { loadingEditUser, changeIsLoading, changeShowFlash } from '../actions/tools';
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
            responseUser.data.email,
            responseUser.data.adresse,
            responseUser.data.avatar,
            responseUser.data.food_like,
            responseUser.data.pseudo,
            responseUser.data.longitude,
            responseUser.data.latitude,
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
                store.dispatch(editPro(responsePro.data.truck_id));
              });
          }
          store.dispatch(loadingEditUser());
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
            if (foodIsLike !== undefined) {
              return {
                ...item,
                isCheck: true,
              };
            }
            return {
              ...item,
              isCheck: false,
            };
          });
          // on sauvegarde le nouveau tableau dans le state
          store.dispatch(saveFood(newData));
          store.dispatch(findUser());
        })
        .catch((error) => {
          // TODO pour afficher un message d'erreur, il faudrait ajouter une info
          // dans le state, et dispatcher ici une nouvelle action
        });
      break;
    }
    case SAVE_EDIT_USER: {
      const {
        email,
        emailBeforeEdit,
        pseudo,
        avatar,
        adresse,
        food,
        longEdit,
        latEdit,
      } = store.getState().editUser;
      const { isPro } = store.getState().logIn;
      let endPoint = '/api/user/edit';
      if (isPro) {
        endPoint = '/api/pro/edit';
      }
      let editEmail = false;
      if (email !== emailBeforeEdit) {
        editEmail = true;
      }
      const foodLikeFilter = food.filter((item) => (item.isCheck));
      const newFoodLike = [];
      foodLikeFilter.map((item) => (
        newFoodLike.push(item.id)
      ));
      const newLong = longEdit.toString();
      const newLat = latEdit.toString();
      const data = {
        email: email,
        pseudo: pseudo,
        avatar: avatar,
        adresse: adresse,
        longitude: newLong,
        latitude: newLat,
        food_like: newFoodLike,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      axios.put(`${URL}${endPoint}`, data, config)
        .then((response) => {
          if (editEmail) {
            store.dispatch(logOut());
            window.location = '/login';
          }
          else {
            store.dispatch(saveUser());
            store.dispatch(changeIsLoading(false, 'editUser'));
            store.dispatch(changeShowFlash('redirect', 'editUser'));
          }
        })
        .catch((error) => {
          store.dispatch(changeIsLoading(false, 'delTruck'));
          store.dispatch(changeShowFlash('error', 'delTruck'));
        });
      break;
    }

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default editUserMiddleware;
