// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { PhoneCall } from 'react-feather';
import { Link } from 'react-router-dom';

// == Import
import './search.scss';

// == Composant
const Search = ({
  search,
  searchField,
  handleSubmit,
  trucks,
}) => {
  let filterSearch;
  if (search.lenght === 0) {
    filterSearch = trucks;
  }
  else {
    filterSearch = trucks.filter((item) => {
      const lowerSearch = search.toLowerCase();
      const lowerTrucks = item.name.toLowerCase();
      const lowerOverView = item.overview.toLowerCase();
      const eventsFilter = item.events.filter((itemEvent) => (
        itemEvent.adresse.toLowerCase().includes(lowerSearch)
      ));
      const foodFilter = item.sell_type_food.filter((itemFood) => (
        itemFood.name.toLowerCase().includes(lowerSearch)
      ));
      return lowerTrucks.includes(lowerSearch)
      || lowerOverView.includes(lowerSearch)
      || eventsFilter.length > 0
      || foodFilter.length > 0;
    });
  }
  return (
    <section id="search">
      <h3 className="search-title">
        Recherche
      </h3>
      <div className="search">

        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label className="search-form--label" htmlFor="search">
            <div className="search-form-inputSubmit">
              <input
                type="text"
                name="search"
                className="search-form--input"
                placeholder="Veuillez saisir votre recherche"
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

          {filterSearch.map((item) => (
            <Link
              to={`search/food-truck/${item.id}`}
              key={item.id}
            >
              <article className="search-results--result">
                <img src={item.picture} className="result-logo" alt={`logo de ${item.name}`} />
                <div className="result-details">
                  <div id="result-head">
                    <p className="result-title">
                      {item.name}
                    </p>
                    <p><PhoneCall />  :  {item.num_tel}</p>
                  </div>
                  <p className="result-overview">
                    {item.overview}
                  </p>
                  <div className="result-type">
                    {item.sell_type_food.map((type) => (
                      <p key={type.name}>{type.name}</p>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}

        </section>
      </div>
    </section>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  searchField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  trucks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      num_tel: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        pseudo: PropTypes.string.isRequired,
        siret: PropTypes.string.isRequired,
      }).isRequired,
      sell_type_food: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      createdAt: PropTypes.string.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          day: PropTypes.string.isRequired,
          hours: PropTypes.string.isRequired,
          adresse: PropTypes.string.isRequired,
          hours_end: PropTypes.string.isRequired,
          longitude: PropTypes.string.isRequired,
          latitude: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Search;
