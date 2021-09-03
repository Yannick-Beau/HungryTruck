// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  Instagram,
  PhoneCall,
  Twitter,
} from 'react-feather';
import { Link, useParams } from 'react-router-dom';

// == Import
import './zoomFT.scss';

// == Composant
const ZoomFT = ({ trucks }) => {
  const { slug } = useParams();
  const idInt = parseInt(slug, 10);
  const truck = trucks.find((item) => item.id === idInt);
  console.log(truck.name);
  return (
    <section className="zoom-section">
      <h2 className="zoom-title">{truck.name}</h2>
      <div className="image-reseaux">
        <img src={truck.picture} alt="nom du food truck" />
        <div className="reseaux">
          <div className="reseaux-link">
            <a href={truck.facebook}>
              <Facebook size="50" color="rgba(255, 255, 255, 0.7)" />
            </a>
            <a href={truck.instagram}>
              <Instagram size="50" color="rgba(255, 255, 255, 0.7)" />
            </a>
            <a href={truck.twitter}>
              <Twitter size="50" color="rgba(255, 255, 255, 0.7)" />
            </a>
          </div>
          <div><PhoneCall />  :  {truck.num_tel}</div>
        </div>
      </div>
      <div className="details">
        <p className="overview">{truck.overview}</p>
        <div className="myFoodTruck-array">
          <table>
            <thead>
              <tr>
                <th>Jours</th>
                <th>Créneaux</th>
                <th>Lieux</th>
              </tr>
            </thead>
            {truck.events.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.day}</td>
                  <td>{item.hours} - {item.hours_end}</td>
                  <td>{item.adresse}</td>
                </tr>
              </tbody>
            ))}

          </table>
        </div>
        <div className="type-food">
          <h3>Les nourritures que le food truck propose</h3>
          <ul>
            {truck.sell_type_food.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
        <Link
          to="/"
        >
          <button type="button" className="back-home">Retour</button>
        </Link>
      </div>
    </section>
  );
};

ZoomFT.propTypes = {
  trucks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      num_tel: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired,
      sell_type_food: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          day: PropTypes.string.isRequired,
          hours: PropTypes.string.isRequired,
          place: PropTypes.string.isRequired,
          hours_end: PropTypes.string.isRequired,
          longitude: PropTypes.string.isRequired,
          latitude: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default ZoomFT;
