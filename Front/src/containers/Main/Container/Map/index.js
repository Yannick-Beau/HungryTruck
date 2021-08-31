import { connect } from 'react-redux';

// on importe le composant de présentation
import Map from 'src/components/Main/Container/Map';
import { sendTruck } from '../../../../actions/map';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state

  // Formualire de création d'un user
  trucks: state.map.trucks,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  sendTruck: () => {
    const action = sendTruck();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Map);
