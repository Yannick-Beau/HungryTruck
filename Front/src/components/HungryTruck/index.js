// == Import npm
import React from 'react';

// == Import components which always display
import Nav from '../Nav';
import Footer from '../Footer';

// == Import others components
import LegalMentions from '../Footer/LegalMentions';

// == Import
import './styles.scss';

// == Composant
const HungryTruck = () => (
  <div className="hungrytruck">
    <Nav />
    <LegalMentions />
    <Footer />
  </div>
);

// == Export
export default HungryTruck;
