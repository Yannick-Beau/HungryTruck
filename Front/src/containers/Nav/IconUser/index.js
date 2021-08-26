import { connect } from 'react-redux';

// on importe le composant de présentation
import IconUser from 'src/components/Nav/IconUser';
import { logOut } from '../../../actions/logIn';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  logged: state.logIn.logged,
  avatar: state.logIn.avatar,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleLogOut: () => {
    const action = logOut();
    dispatch(action);
  },
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(IconUser);
