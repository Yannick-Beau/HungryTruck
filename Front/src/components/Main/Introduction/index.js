// == Import npm
import React from 'react';

// == Import
import './introduction.scss';

// == Composant
const Introduction = () => (
  <aside className="introduction">
    <h2 className="introduction-title"> Bienvenu sur HungryTruck</h2>
    <p className="introduction-text">
      Ce site vous permettra de visualiser les différents food trucks qui sont autour de chez vous, ainsi que les menus.
    </p>
    <p className="introduction-text">De quoi vous régaler et dire adieu à votre balance !</p>
  </aside>
);

// == Export
export default Introduction;
