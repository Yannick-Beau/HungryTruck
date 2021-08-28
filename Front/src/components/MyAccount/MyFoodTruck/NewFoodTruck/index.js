// == Import npm
import React from 'react';
import {
  Edit2,
  Facebook,
  Instagram,
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
      <div className="newFoodTruck">
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
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>09h00 / 12h00</td>
                <td>Place des grands Hommes, Caen</td>
                <td><Edit2 color="#9fe855" /></td>
                <td><Trash2 color="#e61212" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="myFoodTruck-array">
          <h3>Lien vers vos réseaux sociaux</h3>
          <div>
            <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
              <Facebook color="#e69512" size="30" />
              <input
                type="url"
                name="Facebook-foodtruck"
                placeholder="https://facebook.com/mapizzatruck"
              />
            </label>
            <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
              <Instagram color="#e69512" size="30" />
              <input
                type="url"
                name="Facebook-foodtruck"
                placeholder="https://facebook.com/mapizzatruck"
              />
            </label>
            <label className="foodtruck-social" htmlFor="Facebook-foodtruck">
              <Twitter color="#e69512" size="30" />
              <input
                type="url"
                name="Facebook-foodtruck"
                placeholder="https://facebook.com/mapizzatruck"
              />
            </label>
          </div>
        </div>

        <div className="account-button">
          <Link to="/my-account/my-foodtruck" className="button-Link">
            <button type="button" className="button-del">
              Annuler
            </button>
          </Link>
          <Link to="/my-account/my-foodtruck/new" className="button-Link">
            <button
              type="button"
              className="button-linkto"
              onClick={openModal}
            >
              Ajouter un créneau
            </button>
            <Modal
              isOpen={addFoodTruck}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <section className="addslot-section">
                <h2 className="addslot-title">Ajouter un créneau/lieux</h2>
                <p className="addslot-fields--legend">* Champ obligatoire</p>
                <form className="addslot-form">
                  <div className="addslot-from--first">
                    <label className="addslot-label" htmlFor="day">Sélectionner le jour
                      <div>
                        <select className="addslot-input" name="day">
                          <option value="">Jour</option>
                          <option value="lundi">lundi</option>
                          <option value="mardi">mardi</option>
                          <option value="mercredi">mercredi</option>
                          <option value="jeudi">jeudi</option>
                          <option value="vendredi">vendredi</option>
                          <option value="samedi">samedi</option>
                          <option value="dimanche">dimanche</option>
                        </select>
                        <span>*</span>
                      </div>
                    </label>
                    <label className="addslot-label" htmlFor="arriving-time">Sélectionner une heure d'arrivée
                      <div>
                        <select className="addslot-input" name="arriving-time">
                          <option value="">Heure d'arrivée</option>
                          <option value="00h00 - ">00h00</option>
                          <option value="00h30 - ">00h30</option>
                          <option value="01h00 - ">01h00</option>
                          <option value="01h30 - ">01h30</option>
                          <option value="02h00 - ">02h00</option>
                          <option value="02h30 - ">02h30</option>
                          <option value="03h00 - ">03h00</option>
                          <option value="03h30 - ">03h30</option>
                          <option value="04h00 - ">04h00</option>
                          <option value="04h30 - ">04h30</option>
                          <option value="05h00 - ">05h00</option>
                          <option value="05h30 - ">05h30</option>
                          <option value="06h00 - ">06h00</option>
                          <option value="06h30 - ">06h30</option>
                          <option value="07h00 - ">07h00</option>
                          <option value="07h30 - ">07h30</option>
                          <option value="08h00 - ">08h00</option>
                          <option value="08h30 - ">08h30</option>
                          <option value="09h00 - ">09h00</option>
                          <option value="09h30 - ">09h30</option>
                          <option value="10h00 - ">10h00</option>
                          <option value="10h30 - ">10h30</option>
                          <option value="11h00 - ">11h00</option>
                          <option value="11h30 - ">11h30</option>
                          <option value="12h00 - ">12h00</option>
                          <option value="12h30 - ">12h30</option>
                          <option value="13h00 - ">13h00</option>
                          <option value="13h30 - ">13h30</option>
                          <option value="14h00 - ">14h00</option>
                          <option value="14h30 - ">14h30</option>
                          <option value="15h00 - ">15h00</option>
                          <option value="15h30 - ">15h30</option>
                          <option value="16h00 - ">16h00</option>
                          <option value="16h30 - ">16h30</option>
                          <option value="17h00 - ">17h00</option>
                          <option value="17h30 - ">17h30</option>
                          <option value="18h00 - ">18h00</option>
                          <option value="18h30 - ">18h30</option>
                          <option value="19h00 - ">19h00</option>
                          <option value="19h30 - ">19h30</option>
                          <option value="20h00 - ">20h00</option>
                          <option value="20h30 - ">20h30</option>
                          <option value="21h00 - ">21h00</option>
                          <option value="21h30 - ">21h30</option>
                          <option value="22h00 - ">22h00</option>
                          <option value="22h30 - ">22h30</option>
                          <option value="23h00 - ">23h00</option>
                          <option value="23h30 - ">23h30</option>
                        </select>
                        <span>*</span>
                      </div>
                    </label>
                    <label className="addslot-label" htmlFor="end-time">Sélectionner une heure de fin
                      <div>
                        <select className="addslot-input" name="end-time">
                          <option value="">Heure de fin</option>
                          <option value="00h00">00h00</option>
                          <option value="00h30">00h30</option>
                          <option value="01h00">01h00</option>
                          <option value="01h30">01h30</option>
                          <option value="02h00">02h00</option>
                          <option value="02h30">02h30</option>
                          <option value="03h00">03h00</option>
                          <option value="03h30">03h30</option>
                          <option value="04h00">04h00</option>
                          <option value="04h30">04h30</option>
                          <option value="05h00">05h00</option>
                          <option value="05h30">05h30</option>
                          <option value="06h00">06h00</option>
                          <option value="06h30">06h30</option>
                          <option value="07h00">07h00</option>
                          <option value="07h30">07h30</option>
                          <option value="08h00">08h00</option>
                          <option value="08h30">08h30</option>
                          <option value="09h00">09h00</option>
                          <option value="09h30">09h30</option>
                          <option value="10h00">10h00</option>
                          <option value="10h30">10h30</option>
                          <option value="11h00">11h00</option>
                          <option value="11h30">11h30</option>
                          <option value="12h00">12h00</option>
                          <option value="12h30">12h30</option>
                          <option value="13h00">13h00</option>
                          <option value="13h30">13h30</option>
                          <option value="14h00">14h00</option>
                          <option value="14h30">14h30</option>
                          <option value="15h00">15h00</option>
                          <option value="15h30">15h30</option>
                          <option value="16h00">16h00</option>
                          <option value="16h30">16h30</option>
                          <option value="17h00">17h00</option>
                          <option value="17h30">17h30</option>
                          <option value="18h00">18h00</option>
                          <option value="18h30">18h30</option>
                          <option value="19h00">19h00</option>
                          <option value="19h30">19h30</option>
                          <option value="20h00">20h00</option>
                          <option value="20h30">20h30</option>
                          <option value="21h00">21h00</option>
                          <option value="21h30">21h30</option>
                          <option value="22h00">22h00</option>
                          <option value="22h30">22h30</option>
                          <option value="23h00">23h00</option>
                          <option value="23h30">23h30</option>
                        </select>
                        <span>*</span>
                      </div>
                    </label>
                  </div>

                  <div className="addslot-from--first">
                    <label className="addslot-label" htmlFor="adress">Adresse du lieu
                      <div>
                        <input className="addslot-input" type="text" name="adress" placeholder="3 rue de Paris" />
                        <span>*</span>
                      </div>
                    </label>
                    <label className="addslot-label" htmlFor="postal-code">Code postal
                      <div>
                        <input className="addslot-input" type="text" name="postal-code" placeholder="69000" />
                        <span>*</span>
                      </div>
                    </label>
                    <label className="addslot-label" htmlFor="city">Ville
                      <div>
                        <input className="addslot-input" type="text" name="city" placeholder="Lyon" />
                        <span>*</span>
                      </div>
                    </label>
                  </div>
                  <div className="addslot-form--footer">
                    <Link
                      to="/my-account/my-foodtruck/new"
                    >
                      <button type="submit" className="addslot-button--submit" onClick={closeModal}>Valider le créneau/lieux</button>
                    </Link>
                    <Link to="/my-account/my-foodtruck/new">
                      <button type="button" className="addslot-button--quit" onClick={closeModal}>Fermer</button>
                    </Link>
                  </div>
                </form>
              </section>
            </Modal>
          </Link>
          <Link to="/my-account/my-foodtruck" className="button-Link" exact>
            <button type="button" className="button-linktosave">
              Enregistrer
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

NewFoodTruck.propTypes = {
  addFoodTruck: PropTypes.bool.isRequired,
  setAddFoodTruck: PropTypes.func.isRequired,
};
// == Export
export default NewFoodTruck;
