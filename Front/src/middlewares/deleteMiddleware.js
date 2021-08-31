import axios from 'axios';
import URL from '../data/ip';
import {
  SEND_DEL,
  sendDel,
  TRUCK_DEL,
  truckDel,
} from '../actions/delUser';

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
          store.dispatch(sendDel());
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
          store.dispatch(truckDel(action.id));
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
