// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './iconUser.scss';
import imgUser from '../../../assets/img/icon-user.png';
// comment
// == Composant
const IconUser = ({
  logged,
  avatar,
  iconUserIsOpen,
  handleLogOut,
  handleStatusIconUser,
}) => {
  let avatarUser;
  if (avatar !== '' && avatar !== null) {
    avatarUser = avatar;
  }
  else {
    avatarUser = imgUser;
  }
  return (

    <div className="user">
      <img
        className="image-user"
        src={avatarUser}
        alt="utilisateur"
        onClick={() => {
          handleStatusIconUser();
        }}
      />
      { iconUserIsOpen
      && (
      <ul className="ul-user">
        { logged
        && (
          <Link
            className="li-user"
            to="/my-account"
            onClick={() => {
              handleStatusIconUser();
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
              handleStatusIconUser();
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
              handleStatusIconUser();
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
              handleStatusIconUser();
            }}
          >
            Connexion
          </Link>
        )}
      </ul>
      )}
    </div>
  );
};

IconUser.propTypes = {
  logged: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  iconUserIsOpen: PropTypes.bool.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  handleStatusIconUser: PropTypes.func.isRequired,
};

// == Export
export default IconUser;