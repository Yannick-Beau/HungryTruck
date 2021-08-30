import { connect } from 'react-redux';
import { displayModal } from '../../../actions/tools';

// on importe le composant de présentation
import MyFoodTruck from '../../../components/MyAccount/MyFoodTruck';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  myTrucks: state.logIn.trucksPro,
  avatar: state.logIn.avatar,
  displayModal: state.modal.displayModal,

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleDisplayModal: () => {
    dispatch(displayModal());
  },
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MyFoodTruck);
