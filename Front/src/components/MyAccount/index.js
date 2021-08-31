// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// == Import
import './myaccount.scss';

const customStyles = {
  content: {
    top: '25%',
    right: '25%',
    bottom: '25%',
    width: '100vw',
    height: '100vh',
    background: 'transparent',
    border: 'none',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

// == Composant
const MyAccount = ({
  delAccount,
  setDelAccount,
  email,
  adresse,
  avatar,
  city,
  cp,
  foodLike,
  pseudo,
  siret,
  isPro,
  deleteUser,
  delUser,
}) => {
  let avatarUser;
  if (avatar !== '' && avatar !== null && avatar !== undefined) {
    avatarUser = avatar;
  }
  else {
    avatarUser = 'http://placehold.it/250x350';
  }
  let subtitle;

  function openModal() {
    setDelAccount(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setDelAccount(false);
  }
  return (
    <section className="sectionAccount">
      <h2 className="myAccount">Mon compte</h2>
      <img
        className="myaccount-picture"
        src={avatarUser}
        alt="mon compte hungrytruck"
      />
      <article className="account">
        <div className="account-informations">
          <div className="informations-left">
            <p>Mon pseudo : <span>{pseudo}</span></p>
            <p>Mon adresse :</p>
            <p><span>{adresse}</span></p>
            <p><span>{cp}</span><span>{` ${city}`}</span></p>
            { isPro
            && <p>SIRET : <span>{siret}</span></p>}
          </div>
          <div className="informations-right">
            <p>Mon adresse mail: <span>{email}</span></p>
            <p>Mes plats favoris :</p>
            <ul>
              {foodLike.map((item) => (
                <li key={item.name}><span>{item.name}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="account-button">
          {/* <Link to="#" className="button-Link"> */}
          <button
            type="button"
            className="button-del"
            onClick={openModal}
          >
            Supprimer mon compte
          </button>
          <Modal
            isOpen={delAccount}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <section className="deleteaccount-section">
              <h2 className="deleteaccount-title">Suppression de compte</h2>
              <p>Pour supprimer votre compte HungryTruck,<br />
                veuillez renseigner votre mot de passe.
              </p>
              <form
                className="deleteaccount-form"
                onSubmit={(evt) => {
                  console.log('submit');
                }}
              >
                <label className="deleteaccount-label" htmlFor="password">
                  <input
                    className="deleteaccount-input"
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    value={deleteUser}
                    onChange={(e) => {
                      delUser(e.target.value, 'deleteUser');
                    }}
                  />
                </label>
                <button type="submit" className="deleteaccount-form--submit">Supprimer mon compte HungryTruck</button>
              </form>
              <Link
                to="/my-account"
              >
                <button type="button" className="deleteaccount-cancel" onClick={closeModal}>Retourner à mon compte</button>
              </Link>
            </section>
          </Modal>
          {/* </Link> */}
          <Link to="/my-account/edit" className="button-Link">
            <button type="button" className="button-linkto">
              Editer mes informations
            </button>
          </Link>
          { isPro
          && (
          <Link to="/my-account/my-foodtruck" className="button-Link" exact>
            <button type="button" className="button-linkto">
              Voir mes Foodtrucks
            </button>
          </Link>
          )}
          <Link to="/" className="button-Link">
            <button type="button" className="button-linkto">
              Retour au menu principal
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

MyAccount.propTypes = {
  delAccount: PropTypes.bool.isRequired,
  setDelAccount: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cp: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
  siret: PropTypes.number.isRequired,
  isPro: PropTypes.bool.isRequired,
  foodLike: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default MyAccount;
