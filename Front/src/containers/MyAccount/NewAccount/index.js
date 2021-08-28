import { connect } from 'react-redux';

// on importe le composant de présentation
import NewAccount from 'src/components/MyAccount/NewAccount';
import {
  updateField,
  updateToggle,
  createUser,
  findFood,
} from '../../../actions/createUser';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  email: state.createUser.email,
  password: state.createUser.password,
  passwordConfirm: state.createUser.passwordConfirm,
  nickname: state.createUser.nickname,
  address: state.createUser.address,
  cp: state.createUser.cp,
  city: state.createUser.city,
  siret: state.createUser.siret,
  pictureUser: state.createUser.pictureUser,
  createPro: state.createUser.createPro,
  tokenIsOk: state.logIn.logged,
  foods: state.createUser.foods,
  errorPassword: state.createUser.errorPassword,
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
    const action = createUser();
    dispatch(action);
  },
  findFood: () => {
    const action = findFood();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
