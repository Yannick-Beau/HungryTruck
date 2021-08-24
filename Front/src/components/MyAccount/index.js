// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';

// == Import
import './myaccount.scss';

// == import logo
import { Facebook, Instagram } from 'react-feather';

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
const MyAccount = ({ delAccount, setDelAccount }) => {
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
        src="http://placehold.it/250x350"
        alt="mon compte hungrytruck"
      />
      <article className="account">
        <div className="account-informations">
          <div className="informations-left">
            <p>Mon pseudo : Turpinou</p>
            <p>Mon adresse :</p>
            <p>15 place des grands hommes</p>
            <p>12345 IDEFIX</p>
            <p>SIRET : 123456789</p>
          </div>
          <div className="informations-right">
            <p>Mon adresse mail: turpinou@idefix.fr</p>
            <div className="social">
              <div className="facebook">
                <Facebook size="50" color="#e69512" />
                <p>adresse FB</p>
              </div>
              <div className="instagram">
                <Instagram size="50" color="#e69512" />
                <p>adresse insta</p>
              </div>
            </div>
            <p>Mes plats favoris :</p>
            <ul>
              <li>pizza</li>
              <li>burger</li>
            </ul>
          </div>
        </div>
        <div className="account-button">
          <Link to="#" className="button-Link">
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
                <form className="deleteaccount-form">
                  <label className="deleteaccount-label" htmlFor="password">
                    <input className="deleteaccount-input" type="password" name="password" placeholder="Votre mot de passe" />
                  </label>
                  <button type="submit" className="deleteaccount-form--submit">Supprimer mon compte HungryTruck</button>
                </form>
                <Link
                  to="/"
                >
                  <button type="button" className="deleteaccount-cancel">Retourner à mon compte</button>
                </Link>
              </section>
            </Modal>
          </Link>
          <Link to="/new-account" className="button-Link">
            <button type="button" className="button-linkto">
              Editer mes informations
            </button>
          </Link>
          <Link to="/my-account/my-foodtruck" className="button-Link" exact>
            <button type="button" className="button-linkto">
              Voir mes Foodtrucks
            </button>
          </Link>
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

// == Export
export default MyAccount;
