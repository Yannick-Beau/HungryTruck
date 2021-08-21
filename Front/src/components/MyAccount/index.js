// == Import npm
import React from 'react';

// == Import
import './myaccount.scss';

// == Composant
const MyAccount = () => (
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
          <p>facebook</p>
          <p>insta</p>
          <p>Mes plats favoris :</p>
          <ul>
            <li>pizza</li>
            <li>burger</li>
          </ul>
        </div>
      </div>
      <div className="account-button">
        <button type="button" className="button-edit">
          Editer mes informations
        </button>
        <button type="button" className="button-back">
          Retour au menu principal
        </button>
      </div>
    </article>

  </section>
);

// == Export
export default MyAccount;
