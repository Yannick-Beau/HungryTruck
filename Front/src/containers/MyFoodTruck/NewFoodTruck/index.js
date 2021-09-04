import { connect } from 'react-redux';

// on importe le composant de présentation
import NewFoodTruck from '../../../components/MyAccount/MyFoodTruck/NewFoodTruck';
import { changeField, loadNewFoodTruck } from '../../../actions/newFoodTruck';
import { findFood } from '../../../actions/createUser';
import { changeIsLoading } from '../../../actions/tools';

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
  overview: state.newFT.overview,
  picture: state.newFT.picture,
  type1: state.newFT.type1,
  tyep2: state.newFT.tyep2,
  type3: state.newFT.type3,
  foods: state.createUser.foods,
  loadAddTruck: state.tools.loadAddTruck,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, identifier) => {
    const action = changeField(newValue, identifier);
    dispatch(action);
  },
  changeIsLoading: (newValue, identifier) => {
    const action = changeIsLoading(newValue, identifier);
    dispatch(action);
  },
  loadNewFoodTruck: () => {
    const action = loadNewFoodTruck();
    dispatch(action);
  },
  findFood: () => {
    const action = findFood();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NewFoodTruck);
