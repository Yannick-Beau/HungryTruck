import { NEW_TIME, UPDATE_ADDRESS_FT } from '../actions/newTime';

const initialState = {
  foodTruck: '',
  newDay: '',
  newStartTime: '',
  newEndTime: '',
  address: '',
  long: '',
  lat: '',
};

function newTimeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_TIME:
      switch (action.identifier) {
        case 'longitude':
          return {
            ...state,
            long: action.newValue,
          };
        case 'latitude':
          return {
            ...state,
            lat: action.newValue,
          };
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
    case UPDATE_ADDRESS_FT:
      return {
        ...state,
        address: action.address,
        long: action.long,
        lat: action.lat,
      };
    default:
      return state;
  }
}

export default newTimeReducer;
