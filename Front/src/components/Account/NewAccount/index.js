// == Import npm
import React from 'react';

// == Import
import avatar from '../../../assets/img/avatar.jpg';
import './newAccount.scss';

// == Composant
const NewAccount = () => (
  <main className="newaccount">
    <h1 className="newaccount-title">Créer votre compte [utilisateur] [pro] </h1>
    <form className="newaccount-form">
      <div className="form-left">
        <img className="avatar" src={avatar} alt="Avatar" />
        <label className="form-label--avatar" htmlFor="avatar">Lien de votre image de profil*
          <input
            type="text"
            className="avatar-input"
            name="avatar"
            placeholder="https://kelapplication.com/wp-content/uploads/2017/02/app-trouver-foodtruck-trackthetruck.jpg"
          />
        </label>
      </div>
      <div className="form-right">
        <label className="switch-form" htmlFor="pro">
          <h2>Vous êtes professionnel</h2>
          <label className="switch">
            <input type="checkbox" name="pro" />
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
                    <input className="field-input" type="text" name="email" id="field-input--email" placeholder="john.doeuf@gmail.com" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="field-label" htmlFor="pseudo">Saisissez votre Pseudo
                  <div>
                    <input className="field-input" type="text" name="pseudo" id="field-input--pseudo" placeholder="Poule" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="field-label" htmlFor="password">Saisissez votre mot de passe
                  <div>
                    <input className="field-input" type="password" name="password" id="field-input--password" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="field-label" htmlFor="password-confirmation">Confirmer votre mot de passe
                  <div>
                    <input className="field-input" type="password" name="password-confirmation" />
                    <span>*</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="fields-right">
              <div className="field">
                <label className="field-label" htmlFor="adresse">Saisissez votre adresse
                  <div>
                    <input className="field-input" type="text" name="adresse" id="field-input--adresse" placeholder="3 rue de paris" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="field-label" htmlFor="postal-code">Saisissez votre code postal
                  <div>
                    <input className="field-input" type="text" name="postal-code" placeholder="69000" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="field-label" htmlFor="city">Saisissez votre ville
                  <div>
                    <input className="field-input" type="text" name="city" placeholder="Lyon" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              { false
              && (
              <div className="field">
                <label className="field-label" htmlFor="siret">Saisissez votre n° de SIRET
                  <div>
                    <input className="field-input" type="text" name="siret" placeholder="12345678900012" />
                    <span>*</span>
                  </div>
                </label>
              </div>
              )}
            </div>
            <div className="fields-food">
              <h2>Choissier vos nourritures favorites</h2>
              <div className="field-check">
                <label className="field-label" htmlFor="pizza">Pizza
                <label className="switch">
                    <input type="checkbox" name="pizza" />
                    <span className="slider rounded" />
                  </label>
                </label>
                <label className="field-label" htmlFor="burger">Burger
                  <label className="switch">
                    <input type="checkbox" name="burger" />
                    <span className="slider rounded" />
                  </label>
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="submit-form" type="submit" value="Submit">Créer mon compte [pro]</button>
      </div>
    </form>
  </main>
);

// == Export
export default NewAccount;
