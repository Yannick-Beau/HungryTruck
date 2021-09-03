import { connect } from 'react-redux';
import Faq from 'src/components/Footer/FAQ';
import { findFaq } from '../../../actions/faq';
import { loadingFaq } from '../../../actions/tools';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  faq: state.faq.faq,
  loadFaq: state.tools.loadFaq,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  findFaq: (newValue) => {
    const action = findFaq(newValue);
    dispatch(action);
  },
  loadingFaq: (newValue) => {
    const action = loadingFaq(newValue);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Faq);
