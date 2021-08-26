// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import
import './search.scss';
import Logo from '../../assets/img/logo.png';

// == Composant
const Search = ({
  search,
  searchField,
}) => (
  <>
    <h3 className="search-title">
      Recherche
    </h3>
    <div className="search">

      <form className="search-form">
        <label className="search-form--label" htmlFor="search">
          <div className="search-form-inputSubmit">
            <input
              type="text"
              name="search"
              className="search-form--input"
              placeholder="Veuillez saisir votre rechercher"
              value={search}
              onChange={(evt) => {
                searchField(evt.target.value, 'search');
              }}
            />
            <input type="submit" className="search-form--submit" value="Manger !" />
          </div>
        </label>
      </form>
      <section className="search-results">
        <p className="search-results--title">Résultat(s) de votre recherche :</p>
        <Link
          to="/food-truck"
        >
          <article className="search-results--result">
            <img src={Logo} className="result-logo" alt="logo" />
            <div className="result-details">
              <p className="result-title">
                Nom du truck
              </p>
              <p className="result-type">
                Type de food
              </p>
              <div className="result-time">
                <p>Lundi: 16h / 22h - Place des grands Hommes</p>
                <p>Lundi: 16h / 22h - Place des grands Hommes</p>
              </div>
            </div>
          </article>
        </Link>
      </section>
    </div>
  </>
);

// == Export
export default Search;
