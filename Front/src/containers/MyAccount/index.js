import { connect } from 'react-redux';

// on importe le composant de présentation
import MyAccount from 'src/components/MyAccount';
import { delUser, sendDel } from '../../actions/delUser';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  email: state.logIn.email,
  adresse: state.logIn.adresse,
  avatar: state.logIn.avatar,
  foodLike: state.logIn.foodLike,
  pseudo: state.logIn.pseudo,
  roles: state.logIn.roles,
  siret: state.logIn.siret,
  isPro: state.logIn.isPro,
  deleteUser: state.deleteReducer.delete,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  delUser: (newValue, identifier) => {
    const action = delUser(newValue, identifier);
    dispatch(action);
  },

  sendDel: () => {
    dispatch(sendDel());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
