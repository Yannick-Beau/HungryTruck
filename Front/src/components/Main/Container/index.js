// == Import npm
import React from 'react';

// == Import
import './container.scss';

// == Import components
import Map from '../../../containers/Main/Container/Map';
import MapDetails from '../../../containers/Main/Container/MapDetails';

// == Composant
const Container = () => (
  <section id="container">
    <Map />
    <MapDetails />
  </section>
);

// == Export
export default Container;
