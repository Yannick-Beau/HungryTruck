// == Import npm
import React from 'react';

// == Import
import './addSlot.scss';

// == Composant
const AddSlot = () => (
  <section className="addslot-section">
    <h2 className="addSlot-title">Ajouter un créneau/lieux</h2>
    <button type="button" className="addSlot-button--quit">Fermer</button>
    <p className="fields-legend"><span>* Champ obligatoire</span></p>
    <form className="addSlott-form">
      <label className="addSlot-label" htmlFor="day">Sélectionner le jour
        <div>
          <input className="addSlot-input" type="select" name="day" placeholder="Jour" />
          <span>*</span>
        </div>
      </label>
      <label className="addSlot-label" htmlFor="arriving-time">Sélectionner une heure d'arrivée
        <div>
          <input className="addSlot-input" type="select" name="arriving-time" placeholder="Heure d'arrivée" />
          <span>*</span>
        </div>
      </label>
      <label className="addSlot-label" htmlFor="end-time">Sélectionner une heure de fin
        <div>
          <input className="addSlot-input" type="select" name="end-time" placeholder="Heure de fin" />
          <span>*</span>
        </div>
      </label>
      <label className="addSlot-label" htmlFor="adress">Adresse du lieu
        <div>
          <input className="addSlot-input" type="text" name="adress" placeholder="3 rue de Paris" />
          <span>*</span>
        </div>
      </label>
      <label className="addSlot-label" htmlFor="postal-code">Code postal
        <div>
          <input className="addSlot-input" type="text" name="postal-code" placeholder="69000" />
          <span>*</span>
        </div>
      </label>
      <label className="addSlot-label" htmlFor="city">Ville
        <div>
          <input className="addSlot-input" type="text" name="city" placeholder="Lyon" />
          <span>*</span>
        </div>
      </label>
      <button type="submit" className="addSlot-button--submit">Valider le créneau/lieux</button>
    </form>
  </section>
);

// == Export
export default AddSlot;
