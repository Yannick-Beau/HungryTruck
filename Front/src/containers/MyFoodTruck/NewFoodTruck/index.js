import { connect } from 'react-redux';

// on importe le composant de présentation
import NewFoodTruck from '../../../components/MyAccount/MyFoodTruck/NewFoodTruck';
import { newFoodTruck } from '../../../actions/newFoodTruck';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  name: state.newFT.newFoodTruckName,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  newFoodTruck: (newValue, identifier) => {
    const action = newFoodTruck(newValue, identifier);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NewFoodTruck);
