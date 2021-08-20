// == Import npm
import React from 'react';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => (
  <div className="hungrytruck">
    <Nav />
    <Main />
    <Footer />
  </div>
);

// == Export
export default HungryTruck;
