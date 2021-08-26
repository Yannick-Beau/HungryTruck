// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';

// == Composant
const IconUser = ({ user, setUser }) => {
  // const token = localStorage.getItem('token');
  // let tokenIsOk = false;
  // if (token !== null && token !== '') {
  //   tokenIsOk = true;
  // }
  //console.log(tokenIsOk);
  return(
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
      <Link
        className="li-user"
        to="/my-account"
        onClick={() => {
          setUser(!user);
        }}
      >
        Mon compte
      </Link>
      <Link
        className="li-user"
        to="/new-account"
        onClick={() => {
          setUser(!user);
        }}
      >
        Créer un compte
      </Link>
      <Link
        className="li-user"
        to="/login"
        onClick={() => {
          setUser(!user);
        }}
      >
        connexion
      </Link>
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
