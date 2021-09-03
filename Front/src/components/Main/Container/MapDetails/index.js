// == Import npm
import React from 'react';

import { Link } from 'react-router-dom';

// == Import
import './mapdetails.scss';
import Logo from '../../../../assets/img/logo.png';

// == Composant
const MapDetails = ({ trucks, loadMap }) => {
  let eventsIsNull = false;
  const events = trucks.map((truck) => {
    const truckEvents = truck.events.find((item) => item.length > 0);
    return {
      ...truckEvents,
    };
  });
  if (events.length === 0) {
    eventsIsNull = true;
  }
  console.log(events);
  return (
    <article className="mapdetails">
      {!loadMap
    && (
      <div className="mapdetails-text">
        <h3 className="mapdetails-text--title">Vos Food Trucks à proximité :</h3>
        {eventsIsNull
          && (
            <p>Aucun evenement n'est à proximité pour le moment.</p>
          )}
        <ul className="mapdetails-text--ul">
          {trucks.map((truck) => (
            <Link
              to={`/food-truck/${truck.id}`}
              key={truck.id}
            >
              <article className="search-results--result">
                <img src={truck.picture} className="result-logo" alt="logo" />
                <div className="result-details">
                  <p className="result-title">
                    {truck.name}
                  </p>
                  {truck.events.map((item) => (
                    <p key={item.id} className="result-time">
                      {`${item.day}: ${item.hours} / ${item.hours_end} - ${item.adresse}`}
                    </p>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </ul>
      </div>
    )}

    </article>
  );
};

// == Export
export default MapDetails;
