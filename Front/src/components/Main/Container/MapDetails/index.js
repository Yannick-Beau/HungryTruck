// == Import npm
import React from 'react';

import { Link } from 'react-router-dom';

// == Import
import './mapdetails.scss';
import Logo from '../../../../assets/img/logo.png';


// == Composant
const MapDetails = () => (
  <article className="mapdetails">
    <div className="mapdetails-text">
      <h3 className="mapdetails-text--title">Vos Food Trucks à proximité :</h3>
      <ul className="mapdetails-text--ul">
        <Link
          to="/food-truck"
        >
          <article className="search-results--result">
            <img src={Logo} className="result-logo" alt="logo" />
            <div className="result-details">
              <p className="result-title">
                Nom du truck
              </p>
              <p className="result-time">
                Lundi: 16h / 22h - Place des grands Hommes
              </p>
            </div>
          </article>
        </Link>
        <Link
          to="/food-truck"
        >
          <article className="search-results--result">
            <img src={Logo} className="result-logo" alt="logo" />
            <div className="result-details">
              <p className="result-title">
                Nom du truck
              </p>
              <p className="result-time">
                Lundi: 16h / 22h - Place des grands Hommes
              </p>
            </div>
          </article>
        </Link>
        <Link
          to="/food-truck"
        >
          <article className="search-results--result">
            <img src={Logo} className="result-logo" alt="logo" />
            <div className="result-details">
              <p className="result-title">
                Nom du truck
              </p>
              <p className="result-time">
                Lundi: 16h / 22h - Place des grands Hommes
              </p>
            </div>
          </article>
        </Link>

      </ul>
    </div>
  </article>
);

// == Export
export default MapDetails;
