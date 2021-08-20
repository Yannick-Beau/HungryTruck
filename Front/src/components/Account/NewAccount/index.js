// == Import npm
import React from 'react';

// == Import
import imgUser from '../../../assets/img/icon-user.png';
import './newAccount.scss';

// == Composant
const NewAccount = () => (
  <main className="newaccount">
    <h1 className="newaccount-title">Créer votre compte [utilisateur] [pro] </h1>
    <form className="newaccount-form">
      <div className="form-left">
        <img className="avatar" src={imgUser} alt="Avatar" />
        <label className="switch-form" htmlFor="switch">Lien de votre image de profil
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
          <h2>Vous êtes professionnel ?</h2>
          <input type="checkbox" name="pro" className="switch" />
          <span className="slider round" />
        </label>
        <div className="fields">
          <div className="fields-left">
            <div className="field">
              <label className="field-label" htmlFor="email">Saisissez votre Email
                <input className="field-input" type="text" name="email" id="field-input--email" placeholder="john.doeuf@gmail.com" />
              </label>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="pseudo">Saisissez votre Pseudo
                <input className="field-input" type="text" name="pseudo" id="field-input--pseudo" placeholder="Poule" />
              </label>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="password">Saisissez votre mot de passe
                <input className="field-input" type="password" name="password" id="field-input--password" />
              </label>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="password-confirmation">Confirmer votre mot de passe
                <input className="field-input" type="password" name="password-confirmation" />
              </label>
            </div>
          </div>
          <div className="fields-right">
            <div className="field">
              <label className="field-label" htmlFor="adresse">Saisissez votre adresse
                <input className="field-input" type="text" name="adresse" id="field-input--adresse" placeholder="3 rue de paris" />
              </label>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="postal-code">Saisissez votre code postal
                <input className="field-input" type="text" name="postal-code" placeholder="69000" />
              </label>
            </div>
            <div className="field">
              <label className="field-label" htmlFor="city">Saisissez votre ville
                <input className="field-input" type="text" name="city" placeholder="Lyon" />
              </label>
            </div>
            { true
            && (
            <div className="field">
              <label className="field-label" htmlFor="city">Saisissez votre ville
                <input className="field-input" type="text" name="city" placeholder="Lyon" />
              </label>
            </div>
            )}
          </div>
        </div>
        <div className="fiels-food">
          <h2>Choissier vos nourritures favorite</h2>
          <label className="field-label" htmlFor="pizza">Pizza
            <input type="checkbox" name="pizza" className="switch" />
            <span className="slider round" />
          </label>
          <label className="field-label" htmlFor="burger">Burger
            <input type="checkbox" name="burger" className="switch" />
            <span className="slider round" />
          </label>
        </div>
      </div>
    </form>
  </main>
);

// == Export
export default NewAccount;
