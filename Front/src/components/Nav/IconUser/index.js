// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = ({user, setUser, logged, avatar, handleLogOut}) => {
  let avatarUser;
  if (avatar !== '' && avatar !== nul) {
    avatarUser = avatar;
  } 
  else {
    avatarUser = imgUser;
  }
  return(
  <div className="user">
    <img
      className="image-user"
      src={avatarUser}
      alt="utilisateur"
      onClick={() => {
        setUser(!user);
      }}
    />
    { user
    && (
    <ul className="ul-user">
      { logged 
      && (
        <Link
          className="li-user"
          to="/my-account"
          onClick={() => {
            setUser(!user);
          }}
        >
          Mon compte
        </Link>
      )}

      { logged 
      && (
        <Link
          className="li-user"
          to="/"
          onClick={() => {
            localStorage.removeItem('token');
            handleLogOut();
          }}
        >
          Déconnexion
        </Link>
      )}
      
      { !logged
      && (
        <Link
          className="li-user"
          to="/new-account"
          onClick={() => {
            setUser(!user);
          }}
        >
          Créer un compte
        </Link>
      )}
      { !logged
      && (
        <Link
          className="li-user"
          to="/login"
          onClick={() => {
            setUser(!user);
          }}
        >
          connexion
        </Link>
      )}
      
      
    </ul>
    )}
  </div>
)};

IconUser.propTypes = {
  user: PropTypes.bool.isRequired,
  setUser: PropTypes.func.isRequired,
};

// == Export
export default IconUser;

/* <li className="li-user">Mon compte</li>
<li className="li-user">Créer un compte</li>
<li className="li-user">connexion</li> */
