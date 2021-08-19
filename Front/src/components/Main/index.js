// == Import npm
import React from 'react';

// == Import
import './main.scss';

// == Import components
import Introduction from './Introduction';
import Container from './Container';

// == Composant
const Main = () => (
  <div className="main">
    <Introduction />
    <Container />
  </div>
);

// == Export
export default Main;
