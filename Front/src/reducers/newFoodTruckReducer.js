import { ADD_FOODTRUCK } from '../actions/newFoodTruck';

const initialState = {
  name: '',
};

function newFoodTruckReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FOODTRUCK:
      return {
        ...state,
        name: action.newValue,
      };
    default:
      return state;
  }
}

export default newFoodTruckReducer;
