import { connect } from 'react-redux';

// on importe le composant de présentation
import Search from 'src/components/Search';
import { fetchSearch, searchField } from '../../actions/search';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  search: state.search.search,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  searchField: (newValue, identifier) => {
    const action = searchField(newValue, identifier);
    dispatch(action);
  },
  handleSubmit: () => {
    const action = fetchSearch();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Search);
