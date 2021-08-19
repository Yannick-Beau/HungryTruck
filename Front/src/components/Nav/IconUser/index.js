// == Import npm
import React from 'react';
//import User from '@bit/feathericons.react-feather.user';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = () => (
  <div className="user">
    <img className="image-user" src={imgUser} alt="image utilisateur" />
    { true && 
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


