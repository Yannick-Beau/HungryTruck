// == Import npm
import React from 'react';

// == Import
import './main.scss';

// == Import components
import Introduction from './Introduction';
import Container from './Container';

// == Composant
const Main = () => (
  <main className="main">
    <Introduction />
    <Container />
  </main>
);

// == Export
export default Main;
