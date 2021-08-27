// == Import npm
import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

// == Import
import './zoomFT.scss';
import foodtruck from '../../assets/img/foodtruck.jpg';

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
      </div>
      <div className="details">
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

// == Export
export default ZoomFT;
