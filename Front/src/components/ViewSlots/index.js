// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './viewSlots.scss';

// == Composant
const ViewSlots = () => (
  <section className="viewslots-section">
    <h2 className="viewslots-title">Horraire du food truck</h2>
    <div className="myFoodTruck-array">
      <table>
        <thead>
          <tr>
            <th>Jours</th>
            <th>Créneaux</th>
            <th>Lieux</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>12h / 14h</td>
            <td>3 rue de paris, Lyon</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>12h / 14h</td>
            <td>3 rue de paris, Lyon</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>12h / 14h</td>
            <td>3 rue de paris, Lyon</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>12h / 14h</td>
            <td>3 rue de paris, Lyon</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="buttons">
      <Link
        to="/my-account/my-foodtruck"
      >
        <button type="button" className="cancel">Retour</button>
      </Link>
      <Link
        to="/my-account/my-foodtruck/new"
      >
        <button type="button" className="modify">Modifier les horraires</button>
      </Link>
    </div>
  </section>
);

// == Export
export default ViewSlots;
