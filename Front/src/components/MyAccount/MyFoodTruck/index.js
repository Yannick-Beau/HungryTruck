// == Import npm
import React from 'react';
import { Edit2, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';

// == Import
import './myfoodtruck.scss';

// == Composant
const MyFoodTruck = () => (
  <section className="section-myFoodTruck">
    <h2 className="myFoodTruck-title">Mes FoodTrucks</h2>
    <img
      className="myFoodTruck-picture"
      src="http://placehold.it/250x350"
      alt="mon foodtruck hungrytruck"
    />
    <div className="myFoodTruck">
      <div className="myFoodTruck-array">
        <table>
          <thead>
            <tr>
              <th>Nom du food truck</th>
              <th>Type de plat</th>
              <th>Horaires</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PizzaTruck</td>
              <td>Pizza</td>
              <td>voir détails</td>
              <td><Edit2 color="#9fe855" /></td>
              <td><Trash2 color="#e61212" /></td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>PizzaTruck</td>
              <td>Pizza</td>
              <td>voir détails</td>
              <td><Edit2 color="#9fe855" /></td>
              <td><Trash2 color="#e61212" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="myFoodTruck-buttons">
        <Link to="/my-account/my-foodtruck/new" className="button-Link">
          <button type="button" className="button-add">
            Ajouter un foodtruck
          </button>
        </Link>
        <Link to="/my-account" className="button-Link">
          <button type="button" className="button-linkto">
            Retourner sur mon compte
          </button>
        </Link>
        <Link to="/" className="button-Link">
          <button type="button" className="button-linkto">
            Retour au menu principal
          </button>
        </Link>
      </div>
    </div>

  </section>
);

// == Export
export default MyFoodTruck;





/*
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

*/
