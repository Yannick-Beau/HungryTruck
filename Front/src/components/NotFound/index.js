// == Import npm
import React from 'react';

// == Import
import './notfound.scss';
import errorURL from '../../assets/img/foodtruck_close.png';

// == Composant
const NotFound = () => (
  <section className="error">
    <img src={errorURL} alt="hungrytruck error page" />
  </section>
);

// == Export
export default NotFound;
