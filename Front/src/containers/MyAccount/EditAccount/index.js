import { connect } from 'react-redux';

// on importe le composant de présentation
import EditAccount from 'src/components/MyAccount/EditAccount';
import { loadingEditUser } from '../../../actions/tools';
import {
  findFood,
  updateField,
  updateToggle,
  saveEditUser,
  findUser,
  editAddress,
} from '../../../actions/editUser';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  email: state.editUser.email,
  avatar: state.editUser.avatar,
  adresse: state.editUser.adresse,
  pseudo: state.editUser.pseudo,
  siret: state.editUser.siret,
  isPro: state.editUser.isPro,
  logged: state.logIn.logged,
  foods: state.editUser.food,
  loadEditUser: state.tools.loadEditUser,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, identifier) => {
    const action = updateField(newValue, identifier);
    dispatch(action);
  },
  changeToggle: (newValue, identifier) => {
    const action = updateToggle(newValue, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    const action = saveEditUser();
    dispatch(action);
  },
  findFood: () => {
    const action = findFood();
    dispatch(action);
  },
  findUser: () => {
    const action = findUser();
    dispatch(action);
  },
  changeLoadingEditUser: () => {
    const action = loadingEditUser();
    dispatch(action);
  },
  editAddress: (address, long, lat) => {
    const action = editAddress(address, long, lat);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
