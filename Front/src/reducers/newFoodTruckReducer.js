import { ADD_FOODTRUCK, NEW_TIME } from '../actions/newFoodTruck';

const initialState = {
  name: '',
  facebook: '',
  instagram: '',
  twitter: '',
  newDay: '',
  newStartTime: '',
  newEndTime: '',
  phone: '',
};

function newFoodTruckReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FOODTRUCK:
      switch (action.identifier) {
        case 'name':
          return {
            ...state,
            name: action.newValue,
          };
        case 'facebook':
          return {
            ...state,
            facebook: action.newValue,
          };
        case 'instagram':
          return {
            ...state,
            instagram: action.newValue,
          };
        case 'twitter':
          return {
            ...state,
            twitter: action.newValue,
          };
        case 'phone':
          return {
            ...state,
            phone: action.newValue,
          };
        default:
          return state;
      }

    case NEW_TIME:
      switch (action.identifier) {
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

export default newFoodTruckReducer;
