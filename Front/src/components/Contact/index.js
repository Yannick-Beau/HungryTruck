// == Import npm
import React from 'react';

// == Import
import './contact.scss';

// == Composant
const Contact = () => (
  <section className="contact">
    <h2 className="contact-title">Contactez-nous</h2>
    <article>
      <form>
        <p>Vous souhaitez nous adresser un message ?</p>
        <label htmlFor="mail">
          Veuillez renseigner votre adresse mail :
          <input type="text" name="mail" placeholder="exemple : john@deuf.fr" />
        </label>
        <label htmlFor="message">
          Quel message souhaitez vous nous adresser ?
          <textarea
            name="message"
            type="text"
            placeholder="Ecrivez votre message ici"
            minLength="20"
          />
        </label>
        <button className="form-button" type="submit">Envoyer mon message</button>
      </form>
    </article>
  </section>
);

// == Export
export default Contact;
