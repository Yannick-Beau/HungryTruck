// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = () => (
  <div className="user">
    <img className="image-user" src={imgUser} alt="utilisateur" />
    { true
    && (
    <ul className="ul-user">
      <li className="li-user">
        <Link
          to="/my-account"
        >
          Mon compte
        </Link>
      </li>
      <li className="li-user">
        <Link
          to="/new-account"
        >
          Créer un compte
        </Link>
      </li>
      <li className="li-user">
        <Link
          to="#"
        >
          connexion
        </Link>
      </li>
    </ul>
    )}
  </div>
);

// == Export
export default IconUser;

/* <li className="li-user">Mon compte</li>
<li className="li-user">Créer un compte</li>
<li className="li-user">connexion</li> */
