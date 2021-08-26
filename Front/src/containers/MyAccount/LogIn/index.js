import { connect } from 'react-redux';

// on importe le composant de présentation
import LogIn from 'src/components/MyAccount/LogIn';
import { updateField, authentification } from '../../../actions/logIn';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  email: state.createUser.email,
  password: state.createUser.password,
  tokenIsOk: state.logIn.tokenIsOk,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, identifier) => {
    const action = updateField(newValue, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    const action = authentification();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
