// == Import npm
import React from 'react';

// == Import
import './container.scss';

// == Import components
import Map from './Map';
import MapDetails from './MapDetails';

// == Composant
const Container = () => (
  <section id="container">
    <Map />
    <MapDetails />
  </section>
);

// == Export
export default Container;
