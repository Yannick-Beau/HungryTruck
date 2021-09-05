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
import { changeIsLoading, changeShowFlash } from '../actions/tools';

const deleteMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_DEL: {
      const token = localStorage.getItem('token');
      axios.delete(
        `${URL}/api/user/delete`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          localStorage.removeItem('token');
          window.location = '/';
        })
        .catch((error) => {
        });
      break;
    }
    case TRUCK_DEL: {
      const token = localStorage.getItem('token');
      axios.delete(
        `${URL}/api/foodtruck/delete/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          // store.dispatch(truckDel(action.id));
          store.dispatch(saveUser());
          store.dispatch(changeIsLoading(false, 'delTruck'));
          store.dispatch(changeShowFlash('success', 'delTruck'));
        })
        .catch((error) => {
          store.dispatch(changeIsLoading(false, 'delTruck'));
          store.dispatch(changeShowFlash('error', 'delTruck'));
        });
      break;
    }

    case TIME_DEL: {
      const token = localStorage.getItem('token');
      axios.delete(
        `${URL}/api/event/delete/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
        .then((response) => {
          store.dispatch(saveUser());
          store.dispatch(changeIsLoading(false, 'delEvent'));
          store.dispatch(changeShowFlash('success', 'delEvent'));
        })
        .catch((error) => {
          store.dispatch(changeIsLoading(false, 'delEvent'));
          store.dispatch(changeShowFlash('error', 'delEvent'));
        });
      break;
    }
    default:
  }
  next(action);
};

export default deleteMiddleware;
