// == Import npm
import React from 'react';

// == Import
import './addSlot.scss';

// == Composant
const AddSlot = () => (
  <section className="addslot-section">
    <h2 className="addslot-title">Ajouter un créneau/lieux</h2>
    <p className="addslot-fields--legend">* Champ obligatoire</p>
    <form className="addslot-form">
      <label className="addslot-label" htmlFor="day">Sélectionner le jour
        <div>
          <select className="addslot-input" name="day">
            <option value="">Jour</option>
            <option value="lundi">lundi</option>
          </select>
          <span>*</span>
        </div>
      </label>
      <label className="addslot-label" htmlFor="arriving-time">Sélectionner une heure d'arrivée
        <div>
          <select className="addslot-input" name="arriving-time">
            <option value="">Heure d'arrivée</option>
            <option value="12">12h00</option>
          </select>
          <span>*</span>
        </div>
      </label>
      <label className="addslot-label" htmlFor="end-time">Sélectionner une heure de fin
        <div>
          <select className="addslot-input" name="end-time">
            <option value="">Heure de fin</option>
            <option value="14">14h00</option>
          </select>
          <span>*</span>
        </div>
      </label>
      <label className="addslot-label" htmlFor="adress">Adresse du lieu
        <div>
          <input className="addslot-input" type="text" name="adress" placeholder="3 rue de Paris" />
          <span>*</span>
        </div>
      </label>
      <label className="addslot-label" htmlFor="postal-code">Code postal
        <div>
          <input className="addslot-input" type="text" name="postal-code" placeholder="69000" />
          <span>*</span>
        </div>
      </label>
      <label className="addslot-label" htmlFor="city">Ville
        <div>
          <input className="addslot-input" type="text" name="city" placeholder="Lyon" />
          <span>*</span>
        </div>
      </label>
      <div className="addslot-form--footer">
        <button type="submit" className="addslot-button--submit">Valider le créneau/lieux</button>
        <button type="button" className="addslot-button--quit">Fermer</button>
      </div>
    </form>
  </section>
);

// == Export
export default AddSlot;
