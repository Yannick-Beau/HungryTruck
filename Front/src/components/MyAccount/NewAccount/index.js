// == Import npm
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import './newAccount.scss';

// == Composant
const NewAccount = ({
  nickname,
  email,
  password,
  passwordConfirm,
  address,
  cp,
  city,
  siret,
  pictureUser,
  createPro,
  changeField,
  changeToggle,
  handleSubmit,
  tokenIsOk,
  findFood,
  foods,
  errorInscription,
  errorInscriptionText,
}) => {
  if (tokenIsOk) {
    return <Redirect to="/" />;
  }
  let title = 'Créer votre compte Utilisateur';
  let buttonCreateName = 'Créer mon compte Utilisateur';
  if (createPro) {
    title = 'Créer votre compte Pro';
    buttonCreateName = 'Créer mon compte Pro';
  }
  useEffect(() => {
    findFood();
  }, []);
  return (
    <main className="newaccount">
      <h1 className="newaccount-title">{title}</h1>
      <form
        className="newaccount-form"
        onSubmit={(evt) => {
          evt.preventDefault();
          if (password === passwordConfirm) {
            handleSubmit();
          }
        }}
      >
        <div className="form-left">
          <img className="avatar" src={pictureUser} alt="Avatar" />
          <label className="form-label--avatar" htmlFor="avatar">Lien de votre image de profil*
            <input
              type="text"
              className="avatar-input"
              name="avatar"
              placeholder="https://kelapplication.com/image.png"
              value={pictureUser}
              onChange={(evt) => {
                changeField(evt.target.value, 'pictureUser');
              }}
            />
          </label>
        </div>
        <div className="form-right">
          { errorInscription
          && (
          <div className="show-error">
            <p className="show-error--text">{errorInscriptionText}</p>
          </div>
          )}
          <label className="field-label-pro" htmlFor="pro">Vous êtes professionnel
            <label className="switch">
              <input
                type="checkbox"
                name="pro"
                checked={createPro}
                onChange={() => {
                  changeToggle(!createPro, 'togglePro');
                }}
              />
              <span className="slider rounded" />
            </label>
          </label>
          <h2>Vos informations personnelles</h2>
          <p className="fields-legend"><span>* Champ obligatoire</span></p>
          <div className="all-fields">
            <div className="fields">
              <div className="fields-left">
                <div className="field">
                  <label className="field-label" htmlFor="email">Saisissez votre Email
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="email"
                        id="field-input--email"
                        placeholder="john.doeuf@gmail.com"
                        value={email}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'email');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="pseudo">Saisissez votre Pseudo
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="pseudo"
                        id="field-input--pseudo"
                        placeholder="Poule"
                        value={nickname}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'nickname');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="password">Saisissez votre mot de passe
                    <div>
                      <input
                        className="field-input"
                        type="password"
                        name="password"
                        id="field-input--password"
                        value={password}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'password');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="password-confirmation">Confirmer votre mot de passe
                    <div>
                      <input
                        className="field-input"
                        type="password"
                        name="password-confirmation"
                        value={passwordConfirm}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'passwordConfirm');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="fields-right">
                <div className="field">
                  <label className="field-label" htmlFor="adresse">Saisissez votre adresse
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="adresse"
                        id="field-input--adresse"
                        placeholder="3 rue de paris"
                        value={address}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'address');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="postal-code">Saisissez votre code postal
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="postal-code"
                        placeholder="69000"
                        value={cp}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'cp');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="city">Saisissez votre ville
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="city"
                        placeholder="Lyon"
                        value={city}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'city');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                { createPro
                && (
                <div className="field">
                  <label className="field-label" htmlFor="siret">Saisissez votre n° de SIRET
                    <div>
                      <input
                        className="field-input"
                        type="text"
                        name="siret"
                        placeholder="12345678900012"
                        value={siret}
                        onChange={(evt) => {
                          changeField(evt.target.value, 'siret');
                        }}
                      />
                      <span>*</span>
                    </div>
                  </label>
                </div>
                )}
              </div>
              <div className="fields-food">
                <h2>Choissier vos nourritures favorites</h2>
                <fieldset className="field-check">
                  {foods.map((item) => (
                    <label key={item.name} className="field-label" htmlFor={item.name}>{item.name}
                      <label className="switch">
                        <input
                          type="checkbox"
                          name={item.name}
                          checked={item.isCheck}
                          onChange={() => {
                            changeToggle(!item.isCheck, `${item.name}`);
                          }}
                        />
                        <span className="slider rounded" />
                      </label>
                    </label>
                  ))}
                </fieldset>
              </div>
            </div>
          </div>
          <button className="submit-form" type="submit" value="Submit">{buttonCreateName}</button>
        </div>
      </form>
    </main>
  );
};

NewAccount.propTypes = {
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  cp: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  siret: PropTypes.string.isRequired,
  pictureUser: PropTypes.string.isRequired,
  createPro: PropTypes.bool.isRequired,
  changeField: PropTypes.func.isRequired,
  changeToggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tokenIsOk: PropTypes.bool.isRequired,
  findFood: PropTypes.func.isRequired,
  errorInscription: PropTypes.bool.isRequired,
  errorInscriptionText: PropTypes.string.isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      isCheck: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default NewAccount;
