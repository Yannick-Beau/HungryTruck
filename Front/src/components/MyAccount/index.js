// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  foodLike,
  pseudo,
  siret,
  isPro,
  deleteUser,
  delUser,
  sendDel,
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

  const notify = () => toast.success('Votre compte a bien été supprimé', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 1,
  });

  return (
    <section id="sectionAccount">
      <h2 id="myAccount">Mon compte</h2>
      <img
        id="myaccount-picture"
        src={avatarUser}
        alt="mon compte hungrytruck"
      />
      <article id="account">
        <div className="account-informations">
          <div className="informations-left">
            <p>Mon pseudo : <span>{pseudo}</span></p>
            <p>Mon adresse :<span>{adresse}</span></p>
            { isPro
            && <p>SIRET : <span>{siret}</span></p>}
          </div>
          <div className="informations-right">
            <p>Mon adresse mail: <span>{email}</span></p>
            <p id="info-right--foodlist">Mes plats favoris :</p>
            <ul>
              {foodLike.map((item) => (
                <li key={item.name}><span>{item.name}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="account-button">
          <div className="button-Link">
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
                <p id="delAccount-text">Vous êtes sur le point de supprimer votre compte,<br /> la suppression est irréversible et entraîneras la perte de vos données.<br /> Pour confirmer la suppression,<br />
                  vous devez cliquer sur le bouton "Je veux supprimer mon compte HungryTruck".
                </p>
                <form
                  className="deleteaccount-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendDel();
                  }}
                >
                  <button
                    type="submit"
                    className="deleteaccount-form--submit"
                    onClick={notify}
                  >
                    Je veux supprimer mon compte HungryTruck
                  </button>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </form>
                <Link
                  to="/my-account"
                >
                  <button type="button" className="deleteaccount-cancel" onClick={closeModal}>Retourner à mon compte</button>
                </Link>
              </section>
            </Modal>
          </div>
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
