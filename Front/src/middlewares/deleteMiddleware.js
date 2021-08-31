import axios from 'axios';
import URL from '../data/ip';
import {
  SEND_DEL,
  sendDel,
  TRUCK_DEL,
  truckDel,
  TIME_DEL,
} from '../actions/delUser';
import { saveUser } from '../actions/logIn';

const deleteMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_DEL: {
      const token = localStorage.getItem('token');
      console.log(`mon token : ${token}`);
      axios.delete(
        `${URL}/api/user/delete`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // store.dispatch(sendDel());
          localStorage.removeItem('token');
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    case TRUCK_DEL: {
      const token = localStorage.getItem('token');
      console.log('je vais supprimer le truck');
      console.log(action.id);
      axios.delete(
        `${URL}/api/foodtruck/delete/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // store.dispatch(truckDel(action.id));
          store.dispatch(saveUser());
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;
    }

    case TIME_DEL: {
      const token = localStorage.getItem('token');
      console.log('je vais supprimer un rdv');
      console.log(action.id);
      axios.delete(
        `${URL}/api/event/delete/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          console.log(response);
          // store.dispatch(truckDel(action.id));
          store.dispatch(saveUser());
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      break;
    }
    default:
  }
  next(action);
};

export default deleteMiddleware;
