// == Import npm
import React from 'react';

// == Import
import './search.scss';
import Logo from '../../assets/img/logo.png';

// == Composant
const Search = () => (
  <div className="search">
    <h3 className="search-title">
      Recherche
    </h3>
    <form className="search-form">
      <label className="search-form--label" htmlFor="search">
        <div className="search-form-inputSubmit">
          <input type="text" name="search" className="search-form--input" placeholder="Veuillez saisir votre rechercher" />
          <input type="submit" className="search-form--submit" value="Manger !" />
        </div>
      </label>
    </form>
    <section className="search-results">
      <p className="search-results--title">Résultat(s) de votre recherche :</p>

      <article className="search-results--result">
        <img src={Logo} className="result-logo" alt="logo" />
        <div className="result-details">
          <p className="result-title">
            Nom du truck
          </p>
          <p className="result-type">
            Type de food
          </p>
          <p className="result-time">
            <p>Lundi: 16h / 22h - Place des grands Hommes</p>
            <p>Lundi: 16h / 22h - Place des grands Hommes</p>
          </p>
        </div>
      </article>


      <article className="search-results--result">
        <img src={Logo} className="result-logo" alt="logo" />
        <div className="result-details">
          <p className="result-title">
            Nom du truck
          </p>
          <p className="result-type">
            Type de food
          </p>
          <p className="result-time">
            <p>Lundi: 16h / 22h - Place des grands Hommes</p>
            <p>Lundi: 16h / 22h - Place des grands Hommes</p>
          </p>
        </div>
      </article>

    </section>
  </div>
);

// == Export
export default Search;
