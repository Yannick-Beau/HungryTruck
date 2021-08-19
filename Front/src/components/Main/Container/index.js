// == Import npm
import React from 'react';

// == Import
import './container.scss';

// == Import components
import Map from './Map';
import MapDetails from './MapDetails';

// == Composant
const Container = () => (
  <div className="container">
    Dans le container
    <Map />
    <MapDetails />
  </div>
);

// == Export
export default Container;
