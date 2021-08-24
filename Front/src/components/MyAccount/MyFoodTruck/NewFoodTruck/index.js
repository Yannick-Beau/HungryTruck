// == Import npm
import React from 'react';
import {
  Edit2,
  Facebook,
  Instagram,
  Trash2,
  Twitter,
} from 'react-feather';
import { Link } from 'react-router-dom';

// == Import
import './newfoodtruck.scss';

// == Composant
const NewFoodTruck = () => (
  <section className="section-newFoodTruck">
    <h2 className="newFoodTruck-title">Créer mon FoodTruck</h2>
    <img
      className="newFoodTruck-picture"
      src="http://placehold.it/250x350"
      alt="nouveau foodtruck hungrytruck"
    />
    <div className="newFoodTruck">
      <label htmlFor="foodtruck-name">
        Nom du nouveau foodtruck
        <input
          type="text"
          name="foodtruck-name"
          placeholder="exemple : PizzaTruck"
          className="input-yellow"
        />
      </label>
      <div className="myFoodTruck-array">
        <table>
          <thead>
            <tr>
              <th>Jours</th>
              <th>Créneaux</th>
              <th>Lieux</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lundi</td>
              <td>09h00 / 12h00</td>
              <td>Place des grands Hommes, Caen</td>
              <td><Edit2 color="#9fe855" /></td>
              <td><Trash2 color="#e61212" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="myFoodTruck-array">
        <h3>Lien vers vos réseaux sociaux</h3>
        <div>
          <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
            <Facebook color="#e69512" size="30" />
            <input
              type="url"
              name="Facebook-foodtruck"
              placeholder="https://facebook.com/mapizzatruck"
            />
          </label>
          <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
            <Instagram color="#e69512" size="30" />
            <input
              type="url"
              name="Facebook-foodtruck"
              placeholder="https://facebook.com/mapizzatruck"
            />
          </label>
          <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
            <Twitter color="#e69512" size="30" />
            <input
              type="url"
              name="Facebook-foodtruck"
              placeholder="https://facebook.com/mapizzatruck"
            />
          </label>
        </div>
      </div>

      <div className="account-button">
        <Link to="/my-account/my-foodtruck" className="button-Link">
          <button type="button" className="button-del">
            Annuler
          </button>
        </Link>
        <Link to="/" className="button-Link">
          <button type="button" className="button-linkto">
            Ajouter un créneau
          </button>
        </Link>
        <Link to="/my-account/my-foodtruck" className="button-Link" exact>
          <button type="button" className="button-linktosave">
            Enregistrer
          </button>
        </Link>
      </div>
    </div>
  </section>
);

// == Export
export default NewFoodTruck;
