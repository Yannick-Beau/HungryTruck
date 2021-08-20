// == Import npm
import React from 'react';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import Main from '../Main';
import Search from '../Search';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => (
  <div className="hungrytruck">
    <Nav />
    <Search />
    <Footer />
  </div>
);

// == Export
export default HungryTruck;
