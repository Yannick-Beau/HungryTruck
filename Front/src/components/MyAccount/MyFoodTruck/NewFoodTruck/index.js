// == Import npm
import React from 'react';
import {
  AlignLeft,
  Facebook,
  Image,
  Instagram,
  PhoneCall,
  PlusCircle,
  Trash2,
  Twitter,
} from 'react-feather';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// == Import
import './newfoodtruck.scss';

const customStyles = {
  content: {
    top: '15%',
    left: '0',
    bottom: '25%',
    width: '100vw',
    height: '100vh',
    background: 'transparent',
    border: 'none',
  },
};
// == Composant
const NewFoodTruck = ({
  addFoodTruck,
  setAddFoodTruck,
  newFoodTruckName,
  newFoodTruck,
  newFoodTruckFB,
  newFoodTruckInsta,
  newFoodTruckTwitter,
  newTime,
  phone,
  loadNewFoodTruck,
  picture,
  overview,
}) => {
  let subtitle;
  function openModal() {
    setAddFoodTruck(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setAddFoodTruck(false);
  }

  return (
    <section className="section-newFoodTruck">
      <h2 className="newFoodTruck-title">Créer mon FoodTruck</h2>
      <img
        className="newFoodTruck-picture"
        src="http://placehold.it/250x350"
        alt="nouveau foodtruck hungrytruck"
      />
      <form
        className="newFoodTruck"
        onSubmit={(evt) => {
          evt.preventDefault();
          loadNewFoodTruck();
        }}
      >
        <label htmlFor="foodtruck-name">
          Nom du nouveau foodtruck
          <input
            type="text"
            name="foodtruck-name"
            placeholder="exemple : PizzaTruck"
            className="input-yellow"
            value={newFoodTruckName}
            onChange={(e) => {
              newFoodTruck(e.target.value, 'name');
            }}
          />
        </label>
        <div className="myFoodTruck-array">
          <table>
            <thead>
              <tr>
                <th>Jours</th>
                <th>Créneaux</th>
                <th>Lieux</th>
                <th colSpan="1">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>09h00 / 12h00</td>
                <td>Place des grands Hommes, Caen</td>
                <td><Trash2 color="#e61212" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="myFoodTruck-array">
          <div className="myFT-details">
            <div className="myFT-details--detail">
              <h3>Informations</h3>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <PhoneCall color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="0606060606"
                  value={phone}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'phone');
                  }}
                />
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <AlignLeft color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="Phrase d'accroche de votre FoodTruck"
                  value={overview}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'overview');
                  }}
                />
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <Image color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="https://monimage.com"
                  value={picture}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'picture');
                  }}
                />
              </label>
            </div>
            <div className="myFT-details--detail">
              <h3>Mes reseaux sociaux</h3>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <Facebook color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="https://facebook.com/mapizzatruck"
                  value={newFoodTruckFB}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'facebook');
                  }}
                />
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <Instagram color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="https://facebook.com/mapizzatruck"
                  value={newFoodTruckInsta}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'instagram');
                  }}
                />
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <Twitter color="#e69512" size="30" />
                <input
                  type="url"
                  name="Facebook-foodtruck"
                  placeholder="https://facebook.com/mapizzatruck"
                  value={newFoodTruckTwitter}
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'twitter');
                  }}
                />
              </label>
            </div>
            <div className="myFT-details--detail">
              <h3>Nourriture(s) proposée(s)</h3>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <PlusCircle color="#e69512" size="30" />
                <select
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'type1');
                  }}
                  className="addslot-input"
                  name="day"
                >
                  <option value="">Type</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                </select>
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <PlusCircle color="#e69512" size="30" />
                <select
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'type2');
                  }}
                  className="addslot-input"
                  name="day"
                >
                  <option value="">Type</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                </select>
              </label>
              <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
                <PlusCircle color="#e69512" size="30" />
                <select
                  onChange={(e) => {
                    newFoodTruck(e.target.value, 'type3');
                  }}
                  className="addslot-input"
                  name="day"
                >
                  <option value="">Type</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Burger">Burger</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="account-button">
          <Link to="/my-account/my-foodtruck" className="button-Link">
            <button type="button" className="button-del">
              Annuler
            </button>
          </Link>
          <Link to="/my-account/my-foodtruck/new/add" className="button-Link">
            <button
              type="button"
              className="button-linkto"
            >
              Ajouter un créneau
            </button>
          </Link>
          <Link to="/my-account/my-foodtruck" className="button-Link" exact>
            <button type="button" className="button-linktosave">
              Enregistrer
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

NewFoodTruck.propTypes = {
  addFoodTruck: PropTypes.bool.isRequired,
  setAddFoodTruck: PropTypes.func.isRequired,
  newFoodTruckName: PropTypes.string.isRequired,
  newFoodTruck: PropTypes.func.isRequired,
  newFoodTruckFB: PropTypes.string.isRequired,
  newFoodTruckInsta: PropTypes.string.isRequired,
  newFoodTruckTwitter: PropTypes.string.isRequired,
  newTime: PropTypes.func.isRequired,
};
// == Export
export default NewFoodTruck;
