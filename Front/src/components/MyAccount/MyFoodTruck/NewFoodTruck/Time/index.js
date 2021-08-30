// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './time.scss';

// == Composant
const NotFound = () => (
  <section className="addslot-section">
    <h2 className="addslot-title">Ajouter un créneau/lieux</h2>
    <p className="addslot-fields--legend">* Champ obligatoire</p>
    <form className="addslot-form">
      <div className="addslot-from--first">
        <label className="addslot-label" htmlFor="day">Sélectionner le jour
          <div>
            <select
              onChange={(e) => {
                newTime(e.target.value, 'newDay');
              }}
              className="addslot-input"
              name="day"
            >
              <option value="">Jour</option>
              <option value="lundi">lundi</option>
              <option value="mardi">mardi</option>
              <option value="mercredi">mercredi</option>
              <option value="jeudi">jeudi</option>
              <option value="vendredi">vendredi</option>
              <option value="samedi">samedi</option>
              <option value="dimanche">dimanche</option>
            </select>
            <span>*</span>
          </div>
        </label>
        <label className="addslot-label" htmlFor="arriving-time">Sélectionner une heure d'arrivée
          <div>
            <select
              className="addslot-input"
              name="arriving-time"
              onChange={(e) => {
                newTime(e.target.value, 'newStartTime');
              }}
            >
              <option value="">Heure d'arrivée</option>
              <option value="00h00 - ">00h00</option>
              <option value="00h30 - ">00h30</option>
              <option value="01h00 - ">01h00</option>
              <option value="01h30 - ">01h30</option>
              <option value="02h00 - ">02h00</option>
              <option value="02h30 - ">02h30</option>
              <option value="03h00 - ">03h00</option>
              <option value="03h30 - ">03h30</option>
              <option value="04h00 - ">04h00</option>
              <option value="04h30 - ">04h30</option>
              <option value="05h00 - ">05h00</option>
              <option value="05h30 - ">05h30</option>
              <option value="06h00 - ">06h00</option>
              <option value="06h30 - ">06h30</option>
              <option value="07h00 - ">07h00</option>
              <option value="07h30 - ">07h30</option>
              <option value="08h00 - ">08h00</option>
              <option value="08h30 - ">08h30</option>
              <option value="09h00 - ">09h00</option>
              <option value="09h30 - ">09h30</option>
              <option value="10h00 - ">10h00</option>
              <option value="10h30 - ">10h30</option>
              <option value="11h00 - ">11h00</option>
              <option value="11h30 - ">11h30</option>
              <option value="12h00 - ">12h00</option>
              <option value="12h30 - ">12h30</option>
              <option value="13h00 - ">13h00</option>
              <option value="13h30 - ">13h30</option>
              <option value="14h00 - ">14h00</option>
              <option value="14h30 - ">14h30</option>
              <option value="15h00 - ">15h00</option>
              <option value="15h30 - ">15h30</option>
              <option value="16h00 - ">16h00</option>
              <option value="16h30 - ">16h30</option>
              <option value="17h00 - ">17h00</option>
              <option value="17h30 - ">17h30</option>
              <option value="18h00 - ">18h00</option>
              <option value="18h30 - ">18h30</option>
              <option value="19h00 - ">19h00</option>
              <option value="19h30 - ">19h30</option>
              <option value="20h00 - ">20h00</option>
              <option value="20h30 - ">20h30</option>
              <option value="21h00 - ">21h00</option>
              <option value="21h30 - ">21h30</option>
              <option value="22h00 - ">22h00</option>
              <option value="22h30 - ">22h30</option>
              <option value="23h00 - ">23h00</option>
              <option value="23h30 - ">23h30</option>
            </select>
            <span>*</span>
          </div>
        </label>
        <label className="addslot-label" htmlFor="end-time">Sélectionner une heure de fin
          <div>
            <select
              className="addslot-input"
              name="end-time"
              onChange={(e) => {
                newTime(e.target.value, 'newEndTime');
              }}
            >
              <option value="">Heure de fin</option>
              <option value="00h00">00h00</option>
              <option value="00h30">00h30</option>
              <option value="01h00">01h00</option>
              <option value="01h30">01h30</option>
              <option value="02h00">02h00</option>
              <option value="02h30">02h30</option>
              <option value="03h00">03h00</option>
              <option value="03h30">03h30</option>
              <option value="04h00">04h00</option>
              <option value="04h30">04h30</option>
              <option value="05h00">05h00</option>
              <option value="05h30">05h30</option>
              <option value="06h00">06h00</option>
              <option value="06h30">06h30</option>
              <option value="07h00">07h00</option>
              <option value="07h30">07h30</option>
              <option value="08h00">08h00</option>
              <option value="08h30">08h30</option>
              <option value="09h00">09h00</option>
              <option value="09h30">09h30</option>
              <option value="10h00">10h00</option>
              <option value="10h30">10h30</option>
              <option value="11h00">11h00</option>
              <option value="11h30">11h30</option>
              <option value="12h00">12h00</option>
              <option value="12h30">12h30</option>
              <option value="13h00">13h00</option>
              <option value="13h30">13h30</option>
              <option value="14h00">14h00</option>
              <option value="14h30">14h30</option>
              <option value="15h00">15h00</option>
              <option value="15h30">15h30</option>
              <option value="16h00">16h00</option>
              <option value="16h30">16h30</option>
              <option value="17h00">17h00</option>
              <option value="17h30">17h30</option>
              <option value="18h00">18h00</option>
              <option value="18h30">18h30</option>
              <option value="19h00">19h00</option>
              <option value="19h30">19h30</option>
              <option value="20h00">20h00</option>
              <option value="20h30">20h30</option>
              <option value="21h00">21h00</option>
              <option value="21h30">21h30</option>
              <option value="22h00">22h00</option>
              <option value="22h30">22h30</option>
              <option value="23h00">23h00</option>
              <option value="23h30">23h30</option>
            </select>
            <span>*</span>
          </div>
        </label>
      </div>

      <div className="addslot-from--first">
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
      </div>
      <div className="addslot-form--footer">
        <Link
          to="/my-account/my-foodtruck/new"
        >
          <button type="submit" className="addslot-button--submit" onClick={closeModal}>Valider le créneau/lieux</button>
        </Link>
        <Link to="/my-account/my-foodtruck/new">
          <button type="button" className="addslot-button--quit" onClick={closeModal}>Fermer</button>
        </Link>
      </div>
    </form>
  </section>
);

// == Export
export default NotFound;
