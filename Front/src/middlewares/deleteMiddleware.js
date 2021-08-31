import axios from 'axios';
import { SEND_DEL, sendDel } from '../actions/delUser';
import URL from '../data/ip';

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
    default:
  }
  next(action);
};

export default deleteMiddleware;
