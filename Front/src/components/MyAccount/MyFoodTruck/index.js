// == Import npm
import React from 'react';
import { Edit2, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// == Import
import './myfoodtruck.scss';

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
const MyFoodTruck = ({
  foodTruckDetails,
  setAddFoodTruckDetails,
}) => {
  let subtitle;

  function openModal() {
    setAddFoodTruckDetails(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setAddFoodTruckDetails(false);
  }

  return (
    <section className="section-myFoodTruck">
      <h2 className="myFoodTruck-title">Mes FoodTrucks</h2>
      <img
        className="myFoodTruck-picture"
        src="http://placehold.it/250x350"
        alt="mon foodtruck hungrytruck"
      />
      <div className="myFoodTruck">
        <div className="myFoodTruck-array">
          <table>
            <thead>
              <tr>
                <th>Nom du food truck</th>
                <th>Type de plat</th>
                <th>Horaires</th>
                <th colSpan="1">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PizzaTruck</td>
                <td>Pizza</td>
                <td>
                  <Link to="/my-account/my-foodtruck" className="button-Link--details">
                    <button
                      type="button"
                      className="button-linkto--details"
                      onClick={openModal}
                    >
                      voir détails
                    </button>
                    <Modal
                      isOpen={foodTruckDetails}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
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
                            <button type="button" className="cancel" onClick={closeModal}>Retour</button>
                          </Link>
                          <Link
                            to="/my-account/my-foodtruck/new"
                          >
                            <button type="button" className="modify">Modifier les horraires</button>
                          </Link>
                        </div>
                      </section>
                    </Modal>
                  </Link>
                </td>
                <td><Trash2 color="#e61212" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="myFoodTruck-buttons">
          <Link to="/my-account/my-foodtruck/new" className="button-Link">
            <button type="button" className="button-add">
              Ajouter un foodtruck
            </button>
          </Link>
          <Link to="/my-account" className="button-Link">
            <button type="button" className="button-linkto">
              Retourner sur mon compte
            </button>
          </Link>
          <Link to="/" className="button-Link">
            <button type="button" className="button-linkto">
              Retour au menu principal
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

MyFoodTruck.propTypes = {
  foodTruckDetails: PropTypes.bool.isRequired,
  setAddFoodTruckDetails: PropTypes.func.isRequired,
};

// == Export
export default MyFoodTruck;
