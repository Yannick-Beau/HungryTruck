import { connect } from 'react-redux';

// on importe le composant de présentation
import Contact from 'src/components/Contact';
import { contactUs } from '../../actions/contact';
import { changeIsLoading, changeShowFlash } from '../../actions/tools';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  mail: state.contactUs.mail,
  message: state.contactUs.message,
  loadContact: state.tools.loadContact,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  contactUs: (newValue, identifier) => {
    const action = contactUs(newValue, identifier);
    dispatch(action);
  },
  changeIsLoading: (newValue, identifier) => {
    const action = changeIsLoading(newValue, identifier);
    dispatch(action);
  },
  changeShowFlash: (newValue, identifier) => {
    const action = changeShowFlash(newValue, identifier);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
