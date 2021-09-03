import { connect } from 'react-redux';

// on importe le composant de présentation
import AddSlot from '../../../components/MyAccount/MyFoodTruck/NewFoodTruck/AddSlot';
import { newTime, addEvent, updateAddressFT } from '../../../actions/newTime';
import { changeRedirect } from '../../../actions/tools';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  foodTruck: state.newTime.foodTruck,
  newDay: state.newTime.newDay,
  newStartTime: state.newTime.newStartTime,
  newEndTime: state.newTime.newEndTime,
  trucks: state.logIn.trucksPro,
  redirect: state.tools.redirect,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action

  newTime: (newValue, identifier) => {
    const action = newTime(newValue, identifier);
    dispatch(action);
  },
  addEvent: () => {
    const action = addEvent();
    dispatch(action);
  },
  changeRedirect: () => {
    const action = changeRedirect();
    dispatch(action);
  },
  updateAddressFT: (adress, long, lat) => {
    const action = updateAddressFT(adress, long, lat);
    dispatch(action);
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(AddSlot);
