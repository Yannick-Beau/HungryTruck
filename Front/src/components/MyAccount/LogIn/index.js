// == Import npm
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';

// == Import
import './logIn.scss';

// == Composant
const LogIn = ({
  email,
  password,
  changeField,
  handleSubmit,
  tokenIsOk,
  loadingLogIn,
  loadLogIn,
  isSuccessLogIn,
  changeIsSuccessLogin,
  changeIsLoading,
}) => (
  <section className="login-section">
    <h2 className="login-title">Connexion à HungryTruck</h2>
    <p>Bienvenue sur HungryTruck</p>
    <form
      className="login-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        changeIsLoading(true, 'login');
        handleSubmit();
      }}
    >
      <label className="login-label" htmlFor="email">Votre Email
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(evt) => {
            changeField(evt.target.value, 'email');
          }}
          required="required"
        />
      </label>
      <label className="login-label" htmlFor="password">Votre mot de passe
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(evt) => {
            changeField(evt.target.value, 'password');
          }}
          required="required"
        />
      </label>
      {loadLogIn
        && (
          <Loader
            type="Puff"
            color="#e69512"
            height={100}
            width={100}
            id="loaderLogIn"
          />
        )}
      {!loadLogIn
        && (
          <button type="submit" className="login-form--submit">Connexion</button>
        )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
    <Link to="/new-account" className="button-Link">
      <button type="button" className="login-createaccount">Créer un compte</button>
    </Link>
    <Link to="/" className="button-Link">
      <button type="button" className="login-cancel">Retourner à l'acceuil</button>
    </Link>
  </section>
);

LogIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tokenIsOk: PropTypes.bool.isRequired,
};

// == Export
export default LogIn;
