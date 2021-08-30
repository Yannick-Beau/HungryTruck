import { connect } from 'react-redux';

// on importe le composant de présentation
import NewFoodTruck from '../../../components/MyAccount/MyFoodTruck/NewFoodTruck';
import { newFoodTruck, newTime, loadNewFoodTruck } from '../../../actions/newFoodTruck';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  name: state.newFT.newFoodTruckName,
  facebook: state.newFT.newFoodTruckFB,
  instagram: state.newFT.newFoodTruckInsta,
  twitter: state.newFT.newFoodTruckTwitter,
  phone: state.newFT.phone,

  newDay: state.newFT.newDay,
  newStartTime: state.newFT.newStartTime,
  newEndTime: state.newFT.newEndTime,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  newFoodTruck: (newValue, identifier) => {
    const action = newFoodTruck(newValue, identifier);
    dispatch(action);
  },

  newTime: (newValue, identifier) => {
    const action = newTime(newValue, identifier);
    dispatch(action);
  },

  loadNewFoodTruck: () => {
    const action = loadNewFoodTruck();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NewFoodTruck);
