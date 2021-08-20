// == Import npm
import React from 'react';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';
import NewAccount from '../Account/NewAccount';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => (
  <div className="hungrytruck">
    <Nav />
    <NewAccount />
    <Footer />
  </div>
);

// == Export
export default HungryTruck;
