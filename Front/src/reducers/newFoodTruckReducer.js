import { ADD_FOODTRUCK } from '../actions/newFoodTruck';

const initialState = {
  name: '',
  facebook: '',
  instagram: '',
  twitter: '',
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
        default:
          return state;
      }
    default:
      return state;
  }
}

export default newFoodTruckReducer;