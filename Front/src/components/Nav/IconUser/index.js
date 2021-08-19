// == Import npm
import React from 'react';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = () => (
  <div className="user">
    <img className="image-user" src={imgUser} alt="image utilisateur" />
    { false && 
      <ul className="ul-user">
        <li className="li-user">Mon compte</li>
        <li className="li-user">Créer un compte</li>
        <li className="li-user">connexion</li>
      </ul>
    }
  </div>
);

// == Export
export default IconUser;


