// == Import npm
import React from 'react';

// == Import
import './introduction.scss';

// == Composant
const Introduction = () => (
  <aside id="introduction">
    <h2 id="introduction-title">Bienvenue sur HungryTruck</h2>
    <p className="introduction-text">
      HungryTruck vous permettra de visualiser les différents food
      trucks qui sont autour de chez vous.
    </p>
    <p className="introduction-text">De quoi vous régaler et dire adieu à votre balance !</p>
  </aside>
);

// == Export
export default Introduction;
