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
        <table className="array">
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
          <button type="button" className="button-del">
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
