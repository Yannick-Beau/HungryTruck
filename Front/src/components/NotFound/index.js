// == Import npm
import React from 'react';

// == Import
import './notfound.scss';
import errorURL from '../../assets/img/404.png';

// == Composant
const NotFound = () => (
  <section className="error">
    <div className="rotate-center">
      <img
        src={errorURL}
        alt="hungrytruck error page"
        className="errorImg"
      />
    </div>
    <h2
      className="errorText"
    >
      404
    </h2>
  </section>
);

// == Export
export default NotFound;
