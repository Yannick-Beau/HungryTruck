// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = ({ user, setUser }) => (
  <div className="user">
    <img
      className="image-user"
      src={imgUser}
      alt="utilisateur"
      onClick={() => {
        setUser(!user);
      }}
    />
    { user
    && (
    <ul className="ul-user">
      <Link className="li-user" to="/my-account">
        Mon compte
      </Link>
      <Link className="li-user" to="/new-account">
        Créer un compte
      </Link>
      <Link className="li-user" to="/login">
        connexion
      </Link>
    </ul>
    )}
  </div>
);

// == Export
export default IconUser;

/* <li className="li-user">Mon compte</li>
<li className="li-user">Créer un compte</li>
<li className="li-user">connexion</li> */
