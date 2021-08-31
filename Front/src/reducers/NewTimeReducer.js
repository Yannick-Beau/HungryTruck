import { NEW_TIME } from '../actions/newTime';

const initialState = {
  foodTruck: '',
  newDay: '',
  newStartTime: '',
  newEndTime: '',
  address: '',
};

function newTimeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_TIME:
      switch (action.identifier) {
        case 'foodTruck':
          console.log('je suis la');
          return {
            ...state,
            foodTruck: action.newValue,
          };
        case 'address':
          return {
            ...state,
            address: action.newValue,
          };
        case 'newDay':
          return {
            ...state,
            newDay: action.newValue,
          };
        case 'newStartTime':
          return {
            ...state,
            newStartTime: action.newValue,
          };
        case 'newEndTime':
          return {
            ...state,
            newEndTime: action.newValue,
          };
        default:
          return state;
      }
    default:
      return state;
  }
}

export default newTimeReducer;
